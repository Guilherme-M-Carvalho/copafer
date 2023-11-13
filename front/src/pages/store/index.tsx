import FieldsProvider from './contexts/fieldsContext';
import TabsProvider from './contexts/tabsContext';
import Screen from './templates/screen';

export default function Store() {
    return (
        <FieldsProvider>
            <TabsProvider>
                <Screen />
            </TabsProvider>
        </FieldsProvider>
    );
}