import { Request, Response } from "express";
import { LoginDTO } from "../dto/login.dto";
import { LoginRepository } from "../repository/login.repository";
import jwt from 'jsonwebtoken';
import { ModuleRepository } from "../repository/module.repository";
import { PermissionDTO } from "../dto/permission.dto";

export class LoginController {
    async login(req: any, res: Response) {

        const dtoBody = await new LoginDTO().validateUser(req.body);
        const userValidate = await new LoginRepository().loginValidate(dtoBody.email);
        const validate = await new LoginDTO().authLogged(dtoBody.password, userValidate.password );
        const { permissions } = new LoginDTO().handlePermissionLogin(userValidate.permission)
        const lstpermission = await new ModuleRepository().getModules();
        const data = await new PermissionDTO().getModules(lstpermission);
      
        const token = jwt.sign({ id: userValidate.id }, process.env.JWT_PASS ?? '')
        req.session.user = userValidate;

        const user: any = {
            id: userValidate.id,
            name: userValidate.name,
            email: userValidate.email,
            permission: permissions
        }
        return res.status(200).json({token, user, permission: data});
    }

    async session(req: any, res: Response) {
        const id = req.userId
        const userResponse = await new LoginRepository().getUserById({id});
        if (!userResponse) {
            return res.status(401).end();
        }
        const { permissions } = new LoginDTO().handlePermissionLogin(userResponse.permission)
        const lstpermission = await new ModuleRepository().getModules();
        const data = await new PermissionDTO().getModules(lstpermission);
        const user: any = {
            id: userResponse.id,
            name: userResponse.name,
            email: userResponse.email,
            permission: permissions
        }
        return res.status(200).json({user, permission: data});
    }

    async validatePasswordCode(req: Request, res: Response){

        const {code} = req.body
        const { email } = req.body
        const validatedObject = await new LoginDTO().validateCode({ code }.code, { email }.email)
        const authChangePassword = await new LoginRepository().validateCode(validatedObject)

        return res.status(200).json("Authorize change password!");
    }

    async updatePassword(req: Request, res: Response){

        const emailBody = await new LoginDTO().validateUpdatePassword(req.body);
        const updatedPassword = await new LoginRepository().updatePassword(emailBody)
        return res.status(200).json("You changed your password successfully!");
    }
}