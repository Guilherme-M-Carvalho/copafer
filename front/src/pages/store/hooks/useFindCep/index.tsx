import { useContext } from "react"
import useCep from "../../../../hooks/useCep"
import { FieldsContext } from "../../contexts/fieldsContext"

export default function useFindCep(){
    const { handleGetCep } = useCep()
    const { handleCep, fields } = useContext(FieldsContext)

    const handleGet = async () => {
        const cep = await  handleGetCep({
            number: fields.cep.value
        })
        console.log({
            cep
        });
        
        if(cep){

            handleCep(cep)
        }
    }

    return {
        handleGet
    }
}