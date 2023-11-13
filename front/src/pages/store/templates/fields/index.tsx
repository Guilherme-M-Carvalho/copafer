import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import Input from "../../../../components/input";
import { FieldsContext } from "../../contexts/fieldsContext";
import { useContext, useEffect } from "react";
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useFindCep from "../../hooks/useFindCep";
import Contact from "../contact";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ButtonCreate from "../../buttonCreate";
import useCreate from "../../hooks/useCreate";
import useUpdate from "../../hooks/useUpdate";
import ButtonUpdate from "../../buttonUpdate";

export default function Fields() {

    const { fields, handleValue, handleAddContact, cleanFields } = useContext(FieldsContext)
    const { handleGet } = useFindCep()
    const { handleCreate } = useCreate()
    const { handleUpdate } = useUpdate()

    useEffect(() => {
        return () => {
            cleanFields()
        }
    },[])

    return (
        <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={"auto"}>
                <Typography sx={{
                    borderBottom: "2px solid #454242",
                    pb: 1,
                    width: "fit-content",
                    color: "#454242",
                    fontWeight: "bold"
                }}>
                    Dados da loja
                </Typography>
            </Grid>
            <Grid item xs={"auto"}>
                {!fields.id &&
                    <ButtonCreate onClick={handleCreate} />
                }
                {!!fields.id &&
                    <ButtonUpdate onClick={handleUpdate} />
                }
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.name} label={"Nome"} onChange={({ target }) => handleValue({
                            field: "name",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.cep} label={"CEP"} onChange={({ target }) => handleValue({
                            field: "cep",
                            value: target.value.replace(/\D/g, '')
                        })} InputProps={{
                            endAdornment: <InputAdornment onClick={handleGet} sx={{ cursor: "pointer" }} position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.address} label={"Logradouro"} onChange={({ target }) => handleValue({
                            field: "address",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.uf} label={"Estado"} onChange={({ target }) => handleValue({
                            field: "uf",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.locality} label={"Cidade"} onChange={({ target }) => handleValue({
                            field: "uf",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.neighborhood} label={"Bairro"} onChange={({ target }) => handleValue({
                            field: "neighborhood",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.complement} label={"Complemento"} onChange={({ target }) => handleValue({
                            field: "complement",
                            value: target.value
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.number} label={"Número"} onChange={({ target }) => handleValue({
                            field: "number",
                            value: target.value.replace(/\D/g, '')
                        })} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{
                    borderBottom: "2px solid #454242",
                    pb: 1,
                    width: "fit-content",
                    color: "#454242",
                    fontWeight: "bold"
                }}>
                    Contatos
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.ddi} label={"DDI"} onChange={({ target }) => handleValue({
                            field: "ddi",
                            value: target.value.replace(/\D/g, '')
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input sx={{ minWidth: "100%" }} {...fields.telephone} label={"Telefone"} onChange={({ target }) => handleValue({
                            field: "telephone",
                            value: target.value.replace(/\D/g, '')
                        })} />
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ display: "flex", alignItems: "center" }}>
                        <Tooltip title="Adicionar">
                            <IconButton onClick={handleAddContact}>
                                <AddCircleIcon sx={{
                                    color: "#454242"
                                }} />
                            </IconButton>
                        </Tooltip>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
        </Grid >)
}