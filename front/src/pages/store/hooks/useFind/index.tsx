import { useContext, useState } from "react";
import { GlobalAlertContext } from "../../../../contexts/GlobalAlertsContext";
import { api } from "../../../../services/api";
import { StoresProps } from "../../types/find";

export default function useFind() {

    const { handleLoading } = useContext(GlobalAlertContext)
    const [find, setFind] = useState<StoresProps>([])

    const handleFind = async () => {
        handleLoading(true)
        try{
            const {data} = await api({method: "get", url: "/store"})
            setFind(data)
        } catch(err){

        }
        handleLoading(false)
    }

    return {
        handleFind,
        find
    }
}