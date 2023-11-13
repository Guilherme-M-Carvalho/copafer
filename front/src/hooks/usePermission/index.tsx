import { useContext, useEffect, useMemo } from "react"
import { GlobalAlertContext } from "../../contexts/GlobalAlertsContext"
import { AuthContext } from "../../contexts/AuthContext"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { ModuleNavigate } from "../../constants/routes"
import { useLocation, useNavigate } from "react-router-dom"

export default function usePermission() {
    const { handleToast } = useContext(GlobalAlertContext)
    const { user, permission, signOut } = useContext(AuthContext)
    const { module } = useSelector((state: RootState) => state.routes)
    const navigate = useNavigate()
    const location = useLocation();
    // const idPage = !!module?.idSubPage ? module?.idSubPage : module.id
    const idPage = module.id


    const create = !!permission?.find((permi) => (permi.name === "create") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && ( idPage === permi.module))
    const read = !!permission?.find((permi) => (permi.name === "read") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && ( idPage === permi.module))
    const update = !!permission?.find((permi) => (permi.name === "update") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && ( idPage === permi.module))
    const deletePerm = !!permission?.find((permi) => (permi.name === "delete") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && ( idPage === permi.module))
    const exportPerm = !!permission?.find((permi) => (permi.name === "export") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && ( idPage === permi.module))

    useEffect(() => {
        if(!read && idPage == 2 && !!user){
            signOut()
            handleToast({ message: "Voçê não tem permissão para acessar essa página 2", open: true, type: "error" })
            return
        }
        if (!read && idPage !== 0 && !!user && location.pathname != "/") {
            // navigate(ModuleNavigate.home)
            handleToast({ message: "Voçê não tem permissão para acessar essa página", open: true, type: "error" })
        }
    }, [module, user])

    const handleReadPermission = ({module}:{module:number}) => !!permission?.find((permi) => (permi.name === "read") && (!!user?.permission?.find((mod: any) => mod.id === permi.id)) && (module === permi.module))

    return {
        create,
        read,
        update,
        deletePerm,
        exportPerm,
        handleReadPermission
    }
}