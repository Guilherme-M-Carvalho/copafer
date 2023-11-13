// export type 
import StoreIcon from '@mui/icons-material/Store';
import { ModulesProps } from "../../types/modules";
import { ModuleNavigate } from '../routes';
import SettingsIcon from '@mui/icons-material/Settings';
export const modules: ModulesProps = [{
    id: 1,
    icon: StoreIcon,
    name: "Loja",
    route: ModuleNavigate.store
}
// , {
//     id: 2,
//     icon: SettingsIcon,
//     name: "Configurações",
//     route: ModuleNavigate.settings
// }
]
