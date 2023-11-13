import { useContext, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleModule } from "../../store/routes/routesSlice";
import { modules } from "../../constants/modules";
import Cookies from "js-cookie";
// import { AuthContext } from "../../contexts/AuthContext";
import { ModuleNavigate } from "../../constants/routes";


export default function useLocationRoutes() {

    const location = useLocation();
    const dispatch = useDispatch()
    // const { signOut } = useContext(AuthContext)
   
    const handleLocation = () => {
        modules.map(moduleSys => {
            if (moduleSys.route.toUpperCase() == location.pathname.toUpperCase()) {
                const newModule: any = {
                    ...moduleSys
                }
                delete newModule.icon
                dispatch(handleModule({ moduleSys: newModule }))
            } 
            // else if(moduleSys?.modules){
            //     const result = handleCompare(moduleSys?.modules, moduleSys.route)
            //     if(result){
            //         const newModule = {
            //             ...moduleSys,
            //             title: result?.title,
            //             idSubPage: result?.idSubPage
            //         }
            //         delete newModule.iconCard
            //         delete newModule.icon
            //         delete newModule.modules
            //         dispatch(handleModule({ moduleSys: newModule }))
            //     }
            // }
        })
    }
    
    const handleCompare = (items: any[], route?: string): any => {
        const result = items?.map((item: any) => {
            if (item.route.toUpperCase() == location.pathname.toUpperCase()) {
                let title = item.title
                return {route, title: title, idSubPage: item.id}
            } else if (item?.modules) {
                return handleCompare(item?.modules, route)
            } else {
                return null
            }
        })
        return result?.find(el => !!el)
    }



    const tokenCookie = Cookies.get("copafer.token");

    const token = useMemo(() => tokenCookie, [tokenCookie])

    const locationMemo = useMemo(() => location.pathname, [location.pathname])

    useEffect(() => {
        // if (!token && location.pathname != ModuleNavigate.auth) signOut()
        handleLocation()
    }, [locationMemo])

    return
}
