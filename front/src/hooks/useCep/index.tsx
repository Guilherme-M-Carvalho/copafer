import { useContext } from "react"
import { GlobalAlertContext } from "../../contexts/GlobalAlertsContext"
import { apiCep } from "../../services/cep"

export default function useCep(){

    const { handleLoading } = useContext(GlobalAlertContext)

    const handleGetCep = async ({number}: {number: string}) =>{
        number = String(number).replace(/\D/g, '');
        handleLoading(true)
        let response: any = null
        try {
            const { data } = await apiCep({ method: "get", url: `${number}/json/` })
            response = data
        } catch (err: any) {
        }
        handleLoading(false)
        return response
    }

    return {
        handleGetCep
    }
}