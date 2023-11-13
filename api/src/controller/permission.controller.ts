import { Request, Response } from "express";
import { PermissionRepository } from "../repository/permission.repository";
import { PermissionDTO } from "../dto/permission.dto";

export class PermissionController {
    async insertPermission(req: Request, res: Response) {
        try {
            const permission = req.body;
            const data = await new PermissionDTO().validatePermission(permission, 1);
            if(!data?.id){
                const group = await new PermissionRepository().getPermissionByName(data?.name);
                if(group) throw new Error('{"field": "nameExists"}')
            }
            const response: any = await new PermissionRepository().insertPermission(data);
            if (response.message) return res.status(400).json({ field: "insert" });
            return res.status(200).json('{"field": "insertePermission"}');
        } catch (error: any) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }
    
    async getPermissionById(req: Request, res: Response) {
        const permissionId = req.params.id
        const permissionIdParsed = Number(permissionId)
        const lstpermission = await new PermissionRepository().getPermissionById(permissionIdParsed);
        return res.status(200).json(lstpermission)
    }

    async deletePermission(req: Request, res: Response) {

        const permissionId = req.params.id
        const permissionIdParsed = Number(permissionId)
        const lstpermission = await new PermissionRepository().deletePermission(permissionIdParsed);
        return res.status(200).json('{"field": "permissionDeletedSuccessfully"}')
    }

    async updatePermission(req: Request, res: Response) {
        const permission = req.body;
        const data = await new PermissionDTO().validatePermission(permission);
        const response: any = await new PermissionRepository().insertPermission(data);
        return res.status(200).json('{"field": "permissionUpdatedSuccessfully"}')
    }
    
    async listPermission(_req: Request, res: Response) {
        const permission = await new PermissionRepository().getPermission();
        const data = await new PermissionDTO().getPermissions(permission);
        return res.status(200).json(data)
    }
}