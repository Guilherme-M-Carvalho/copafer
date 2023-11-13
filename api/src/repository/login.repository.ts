import { AppDataSource } from "../data-source";
import { User } from "../entity/user";
import { PermissionRepository } from "./permission.repository";

const loginRepository = AppDataSource.getRepository(User);
export class LoginRepository {

    errorMessage: string = '{"field": "dbError"}'

    async loginValidate(email: string) {
        try {
            const user = await loginRepository.findOne({ where: { email: email }, select: { password: true, email: true, name: true, id: true }, relations: { group: true } })
            const ids = user?.group?.map((gru: any) => {
                return gru.group?.id
            })
            let permission: any = []
            if (ids) {
                permission = await new PermissionRepository().getPermissionByIds(ids)
            }
            type GetType = typeof user
            type GetTypePermission = typeof permission
            const newUser: GetType & GetTypePermission = {
                ...user,
                permission
            }

            if (!newUser) {
                this.errorMessage = "Invalid email!"
                throw new Error(this.errorMessage);
            }
            return newUser;
        } catch (error) {
            throw new Error(this.errorMessage)
        }
    }

    async getUserById({ id }: { id: number }) {
        try {
            const user = await loginRepository.findOne({ where: { id: id }, select: { password: true, email: true, name: true, id: true }, relations: { group: true } })
            const ids = user?.group?.map((gru: any) => {
                return gru.group?.id
            })
            let permission: any = []
            if (ids) {
                permission = await new PermissionRepository().getPermissionByIds(ids)
            }
            type GetType = typeof user
            type GetTypePermission = typeof permission
            const newUser: GetType & GetTypePermission = {
                ...user,
                permission
            }
            return newUser;
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async emailValidate(email: string, code: string) {
        try {
            const validateEmail = await loginRepository.findOneBy(
                { email: email }
            )
            if (validateEmail == null) throw new Error("Invalid email!");

            const updatedEmailCode = await loginRepository.update(validateEmail.id, { recover_password_code: code })
            if (updatedEmailCode.affected !== 1) throw new Error("Invalid user!")

            return code;
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }


    async validateCode(req: any) {
        try {
            const authChangeEmail = await loginRepository.findOneBy(
                {
                    email: req.email,
                    recover_password_code: req.code
                }
            )
            if (authChangeEmail == null) throw new Error("code");
            const updateEmail = await loginRepository.update(authChangeEmail.id, { auth_change_password: true })
            if (updateEmail.affected !== 1) throw new Error("Invalid email!")

            return true
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }

    async updatePassword(req: any) {
        try {
            const updatedEmailCode = await loginRepository
                .createQueryBuilder()
                .update(User)
                .set({ password: req.password, auth_change_password: false, recover_password_code: "" })
                .where("email = :email", { email: req.email })
                .where("recover_password_code = :recoverPasswordCode", { recoverPasswordCode: req.code })
                .where("auth_change_password = :authPassword", { authPassword: true })
                .execute()

            if (updatedEmailCode.affected != 1) throw new Error("Unauthorized password change attempt!")
        } catch (error) {
            throw new Error('{"field": "dbError"}')
        }
    }
}