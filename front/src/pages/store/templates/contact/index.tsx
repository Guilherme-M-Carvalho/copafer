import Chip from '@mui/material/Chip';
import { Paper } from '@mui/material';
import { useContext } from 'react';
import { FieldsContext } from '../../contexts/fieldsContext';
import { styled } from '@mui/material/styles';
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));


export default function Contact() {

    const { fields, handleDeleteContact } = useContext(FieldsContext)

    return (<Paper
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
            background: "transparent",
            boxShadow: "none"
        }}
        component="ul"
    >
        {fields.contact.map((contact, index) => (
            <ListItem key={index}>
                <Chip
                    label={`+${contact.ddi.value} ${contact.telephone.value}`}
                    // onClick={handleClick}
                    onDelete={() => handleDeleteContact({
                        index
                    })}
                />
            </ListItem>
        ))}
    </Paper>)
}