import { useState } from "react"
import { FieldsProps, HandleCepProps, HandleDeleteContactProps, HandleValueContactProps, HandleValueProps, SetAllFieldsProps } from "../../types/fields"
import { inputAttributes } from "../../../../constants/input"

export default function useFields() {

    const [fields, setFields] = useState<FieldsProps>({
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
    })

    const handleValue: HandleValueProps = ({ field, value }) => {
        setFields(obj => {
            obj[field].value = value
            return {
                ...obj
            }
        })
    }

    const handleValueContact: HandleValueContactProps = ({ field, value, index }) => {
        setFields(obj => {
            obj.contact[index][field].value = value
            return {
                ...obj
            }
        })
    }

    const handleCep: HandleCepProps = ({
        bairro,
        complemento,
        localidade,
        logradouro,
        uf
    }) => {
        setFields(obj => {
            obj.address.value = logradouro
            obj.neighborhood.value = bairro
            obj.uf.value = uf
            obj.complement.value = complemento
            obj.locality.value = localidade
            return {
                ...obj
            }
        })
    }

    const handleDeleteContact: HandleDeleteContactProps = ({ index }) => {
        setFields(obj => {
            obj.contact.splice(index, 1)
            return {
                ...obj
            }
        })
    }

    const handleAddContact = () => {
        setFields(obj => {
            obj.contact.push({
                ddi: {
                    ...inputAttributes,
                    value: obj.ddi.value
                },
                telephone: {
                    ...inputAttributes,
                    value: obj.telephone.value
                }
            })
            obj.ddi.value = ""
            obj.telephone.value = ""
            return {
                ...obj
            }
        })
    }

    const cleanFields = () => {
        setFields({
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
        })
    }

    const setAllFields:SetAllFieldsProps = (props) => {
        setFields({...props})
    }

    return {
        handleAddContact,
        handleDeleteContact,
        handleValueContact,
        handleValue,
        handleCep,
        setAllFields,
        cleanFields,
        fields
    }
}