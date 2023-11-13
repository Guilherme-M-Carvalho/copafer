import { useContext } from "react";
import { GlobalAlertContext } from "../../../../contexts/GlobalAlertsContext";
import { api } from "../../../../services/api";
import useData from "../useData";
import { FieldsContext } from "../../contexts/fieldsContext";
import { TabsContext } from "../../contexts/tabsContext";

export default function useCreate() {

    const { handleLoading, handleToast } = useContext(GlobalAlertContext)
    const { handleData } = useData()
    const { fields } = useContext(FieldsContext)
    const { handleChange } = useContext(TabsContext)

    const handleCreate = async () => {
        const data = handleData({ fields })
        handleLoading(true)
        try {
            const response = await api({ method: "post", url: "/store", data })
            handleToast({
                message: "Loja criada com sucesso!",
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
        handleCreate,
    }
}