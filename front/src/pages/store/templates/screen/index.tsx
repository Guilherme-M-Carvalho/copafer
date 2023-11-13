import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stores from '../stores';
import { useContext, useEffect } from 'react';
import { TabsContext } from '../../contexts/tabsContext';
import useFind from '../../hooks/useFind';
import Fields from '../fields';
import { FieldsContext } from '../../contexts/fieldsContext';

export default function Screen() {

    const { handleChange, tab } = useContext(TabsContext)
    const { fields } = useContext(FieldsContext)

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList sx={{".Mui-selected": {
                        fontWeight: "bold"
                    }}} onChange={handleChange} textColor="primary"
                        indicatorColor="primary"  aria-label="lab API tabs example">
                        <Tab label="Lojas" value="1" sx={{textTransform: "capitalize"}} />
                        <Tab label="Criar Loja" value="2" sx={{textTransform: "capitalize"}} />
                        <Tab label="Editar Loja" disabled={!fields.id} value="3" sx={{textTransform: "capitalize"}}/>
                    </TabList>
                </Box>
                <TabPanel value="1"><Stores /></TabPanel>
                <TabPanel value="2"><Fields /></TabPanel>
                <TabPanel value="3"><Fields /></TabPanel>
            </TabContext>
        </Box>
    );
}