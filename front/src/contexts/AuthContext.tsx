import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalAlertContext } from "./GlobalAlertsContext";
// import { EmailLogin, PasswordLogin } from "../pages/signin/types/form";
import { ModuleNavigate } from "../constants/routes";

type SignInReturn = {
    email: string,
    password: string
}

type AuthContextData = {
    isPermission: boolean;
    isAuthenticated: boolean;
    user: UserProps | undefined;
    signIn: ({ email, password }: SignProps) => Promise<SignInReturn>;
    signOut: () => void;
    getUser: () => Promise<void>;
    auth: ({ email, name }: AuthProps) => Promise<void>;
    permission: PermissionProps
}
type PermissionProps = {
    id: number;
    name: string;
    module: number
}[]

type UserProps = {
    id: number;
    name: string;
    email: string;
    permission: { id: number }[];
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignProps = {
    email: string;
    password: string;
}

type AuthProps = {
    email: string;
    name: string;
}




export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const navigate = useNavigate();
    const [permission, setPermission] = useState<PermissionProps>([]);
    const { handleToast, handleLoading } = useContext(GlobalAlertContext);
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
    const location = useLocation()
    const isPermission = !!user?.permission.length



    useEffect(() => {
        // if(location.pathname.toUpperCase() !== ModuleNavigate.auth.toUpperCase()){
        //     getUser()
        // }
    }, [])



    function signOut() {
        Cookies.remove("copafer.token");
        navigate('/');
    }

    async function getUser() {
        // tentar pegar algo no cookie
        const token = Cookies.get("copafer.token");
        if (token) {
            api
                .get("/login/session")
                .then(({ data }) => {
                    const { user: userResponse, permission } = data;
                    const id = userResponse?.id
                    const name = userResponse?.name
                    const email2 = userResponse?.email
                    const permissionUser = userResponse?.permission

                    setUser({ id, email: email2, name, permission: permissionUser });
                    setPermission(permission)
                    if (!permissionUser.length) {
                        signOut()
                    }
                })
                .catch((e) => {
                    //Se deu erro deslogamos o user.
                    signOut();
                });
                return;
        }
        signOut();
        return;

    }

    async function signIn({ email, password }: SignProps): Promise<SignInReturn> {
        handleLoading(true);
        return { email, password };
    }

    async function auth({ email, name }: AuthProps) {
        handleLoading(true);
        try {
            const { data } = await api({
                method: "post",
                url: "/login/auth",
                data: { email: email, name: name },
            });

            const { user: userResponse, token, permission } = data;

            Cookies.set("copafer.token", token, { expires: 7 });

            const id = userResponse?.id
            const name2 = userResponse?.name
            const email2 = userResponse?.email
            const permissionUser = userResponse?.permission
            api.defaults.headers["Authorization"] = `Bearer ${token}`;
            setUser({ id, email: email2, name: name2, permission: permissionUser });
            setPermission(permission)
            
            if (!!permissionUser.length) {
                handleToast({ open: true, type: "success", message: "Login efetuado com sucesso!" });
                // navigate(ModuleNavigate.home);
            } else {
                signOut()
                handleToast({ open: true, type: "error", message: "Sem permissão para acessar o sistema!" });
            }
        } catch (err: any) {
            signOut()
        }
        handleLoading(false);
        return
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, getUser, isAuthenticated, user, auth, isPermission, permission }}>
            {children}
        </AuthContext.Provider>
    );
}
