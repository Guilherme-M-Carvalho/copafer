import { useContext, useState } from "react";
import { GlobalAlertContext } from "../../../../contexts/GlobalAlertsContext";
import { api } from "../../../../services/api";

export default function useDelete() {

    const { handleLoading, handleToast } = useContext(GlobalAlertContext)

    const handleDelete = async ({ id }: { id: number }) => {
        handleLoading(true)
        try {
            const { data } = await api({ method: "delete", url: "/store/" + id })
            handleToast({
                message: "Loja deletada com sucesso!",
                open: true,
                type: "success"
            })
        } catch (err) {

        }
        handleLoading(false)
    }

    return {
        handleDelete,
    }
}