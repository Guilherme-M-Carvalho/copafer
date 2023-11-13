import { ElementType } from "react";
import { ModuleNavigate } from "../../constants/routes";

export type ModulesProps = {
    id?: number;
    icon?: ElementType;
    name: string;
    route: ModuleNavigate
}[]