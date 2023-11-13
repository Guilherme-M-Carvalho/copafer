import ButtonSys from "../../../components/buttonSys";

export default function ButtonUpdate({...props}){
    return <ButtonSys variant="contained" color="primary"  {...props}>
        Salvar
    </ButtonSys>
}