import { useContext } from "react";
import { GlobalAlertContext } from "../../../../contexts/GlobalAlertsContext";
import { api } from "../../../../services/api";
import useData from "../useData";
import { FieldsContext } from "../../contexts/fieldsContext";
import { TabsContext } from "../../contexts/tabsContext";

export default function useUpdate() {

    const { handleLoading, handleToast } = useContext(GlobalAlertContext)
    const { handleData } = useData()
    const { fields } = useContext(FieldsContext)
    const { handleChange } = useContext(TabsContext)

    const handleUpdate = async () => {
        const data = handleData({ fields })
        handleLoading(true)
        try {
            const response = await api({ method: "put", url: "/store", data })
            handleToast({
                message: "Loja editada com sucesso!",
                open: true,
                type: "success"
            })
            handleChange(null, '1')
        } catch (err) {
            handleToast({
                message: "Erro ao salvar!",
                open: true,
                type: "error"
            })
        }
        handleLoading(false)
    }

    return {
        handleUpdate,
    }
}