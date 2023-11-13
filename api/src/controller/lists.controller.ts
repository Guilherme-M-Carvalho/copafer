import { Request, Response } from "express";
import { PermissionRepository } from "../repository/permission.repository";
import { PermissionDTO } from "../dto/permission.dto";
import { UserRepository } from "../repository/user.repository";
import { UserDTO } from "../dto/user.dto";

export class ListsController {
    async getListsPermission(req: Request, res: Response) {
        const lists = await new PermissionRepository().getLists()
        const listsDto = await new PermissionDTO().getPermissionsLists(lists)
        return res.status(200).json(listsDto);
    }
    async getListsUser(req: Request, res: Response) {
        const lists = await new UserRepository().getLists()
        const listsDTO = await new UserDTO().getLists(lists)
        return res.status(200).json(listsDTO);
    }
}