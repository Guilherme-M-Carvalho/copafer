import { FieldsProps } from "../../types/fields"

export default function useData() {

    const handleData = ({ fields }: { fields: FieldsProps }) => {
        return {
            id: fields.id,
            name: fields.name.value,
            address: {
                id: fields.idAddress,
                cep: fields.cep.value,
                address: fields.address.value,
                complement: fields.complement.value,
                neighborhood: fields.neighborhood.value,
                locality: fields.locality.value,
                uf: fields.uf.value,
                number: fields.number.value,
            },
            contact: fields.contact.map(el => {
                return {
                    id: el.id,
                    ddi: el.ddi.value,
                    telephone: el.telephone.value,
                }
            })
        }
    }

    return {
        handleData
    }
}