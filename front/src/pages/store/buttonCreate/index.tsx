import ButtonSys from "../../../components/buttonSys";

export default function ButtonCreate({...props}){
    return <ButtonSys variant="contained" color="primary"  {...props}>
        Criar
    </ButtonSys>
}