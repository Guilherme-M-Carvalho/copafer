import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";
import { UserDTO } from "../dto/user.dto";

export class UserController {
    async insertUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const { data, worker } = await new UserDTO().validateUser(user, 1);
            const emailExists = await new UserRepository().getByEmail({ email: data.email })
            if (!!emailExists) throw new Error('{"field": "emailExists"}')
            const response: any = await new UserRepository().insertUser(data, worker);
            if (response.message) return res.status(400).json({ field: "insert" });
            return res.status(200).json('{"field": "inserteUser"}');
        } catch (error: any) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }

    async getUserById(req: Request, res: Response) {
        const permissionId = req.params.id
        const permissionIdParsed = Number(permissionId)
        const lstpermission = await new UserRepository().getUserById(permissionIdParsed);
        return res.status(200).json(lstpermission)
    }

    async deleteUser(req: Request, res: Response) {

        const permissionId = req.params.id
        const permissionIdParsed = Number(permissionId)
        const lstpermission = await new UserRepository().deleteUser(permissionIdParsed);
        return res.status(200).json('{"field": "userDeletedSuccessfully"}')
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const { data, worker } = await new UserDTO().validateUser(user);
            data.id = Number(data.id)
            if(!await new UserRepository().validateUser(data.id)) throw new Error('{"field": "invalidUser"}')
            const response: any = await new UserRepository().insertUser(data, worker);
            if (response.message) return res.status(400).json({ field: "update" });
            return res.status(200).json('{"field": "userUpdatedSuccessfully"}');
        } catch (error: any) {
            return res.status(400).json(JSON.parse(error.message));
        }
    }

    async listUsers(_req: Request, res: Response) {
        const users = await new UserRepository().getUsers();
        const data = await new UserDTO().getUsers(users);
        return res.status(200).json(data)
    }
}