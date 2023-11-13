import { useContext, useState } from "react";
import { GlobalAlertContext } from "../../../../contexts/GlobalAlertsContext";
import { api } from "../../../../services/api";
import { StoresProps } from "../../types/find";
import { FieldsContext } from "../../contexts/fieldsContext";
import { FieldsProps } from "../../types/fields";
import { inputAttributes } from "../../../../constants/input";
import { TabsContext } from "../../contexts/tabsContext";

export default function useFindOne() {

    const { handleChange } = useContext(TabsContext)
    const { handleLoading } = useContext(GlobalAlertContext)
    const { setAllFields } = useContext(FieldsContext)
    const initFields: FieldsProps = {
        address: {
            ...inputAttributes
        },
        cep: {
            ...inputAttributes
        },
        complement: {
            ...inputAttributes
        },
        contact: [],
        locality: {
            ...inputAttributes
        },
        name: {
            ...inputAttributes
        },
        neighborhood: {
            ...inputAttributes
        },
        uf: {
            ...inputAttributes
        },
        number: {
            ...inputAttributes
        },
        ddi: {
            ...inputAttributes
        },
        telephone: {
            ...inputAttributes
        }
    }

    const handleFind = async (id: number) => {
        handleLoading(true)
        try {
            const { data } = await api({ method: "get", url: "/store/"+id })
            initFields.id = id
            initFields.name.value = data?.name
            initFields.idAddress = data?.address?.id
            initFields.address.value = data?.address?.address
            initFields.cep.value = data?.address?.cep
            initFields.complement.value = data?.address?.complement
            initFields.neighborhood.value = data?.address?.neighborhood
            initFields.locality.value = data?.address?.locality
            initFields.uf.value = data?.address?.uf
            initFields.number.value = data?.address?.number
            initFields.contact = data?.contact?.map((el: any) => {
                return {
                    id: el?.id,
                    ddi: {
                        ...inputAttributes,
                        value: el.ddi
                    },
                    telephone: {
                        ...inputAttributes,
                        value: el.telephone
                    },
                }
            })
            setAllFields(initFields)
            handleChange(null, '3')
        } catch (err) {

        }
        handleLoading(false)
    }

    return {
        handleFind,
    }
}