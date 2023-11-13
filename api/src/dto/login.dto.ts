import bcrypt from 'bcrypt';
import { Utils } from "../utils/utils";
// import { generate } from 'generate-password'

export class LoginDTO {
    async validateUser(req: { email: string, password: string }) {

        const { email, password } = req;

        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailValidate = emailRegexp.test({ email }.email)

        if (emailValidate == false) throw new Error("Invalid email!")
        if (!{ password }.password) throw new Error("Invalid password!")

        interface responseType {
            email: string,
            password: string
        }

        let response: responseType = {
            email: { email }.email,
            password: { password }.password
        }

        return response;

    }

    async validateUpdatePassword(req: any){
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailValidate = emailRegexp.test(req.email)
        if (emailValidate == false) throw new Error("Invalid email!")
        if (!req.password) throw new Error("Invalid password!")
        req.password = await new Utils().encryptPassword(String(req.password))
        if (String(req.code).length != 6) throw new Error("Invalid code!")

        return req
    }

    async authLogged(password: string, authPassword: string) {
        const verifyPassword = bcrypt.compareSync(password, authPassword);

        if (!verifyPassword) {
            throw new Error("Invalid password!");
        }

    }

    handlePermissionLogin(permission: any[]){
        let permissions: any = []
        permission.map((perm:any) => {
            perm.permission.map((el: any) => {
                if(!permissions.find((item: any) => item.id === el.permission.id)){
                    permissions.push({id: el.permission.id})
                }
            })
        })
        return {permissions}
    }

    // async validateEmail(req: string) {

    //     let emailTrim = req.trim()
    //     new Utils().emailValidation(emailTrim)

    //     const code: string = generate({
    //         length: 6,
    //         numbers: true
    //     });
    //     return code
    // }

    async createEmailBody(code: string, email: string) {
        const smtpObject: any = {
            from: "",
            to: email,
            subject: "Recuperação de Senha",
            text: "Teste recuperação de senha!",
            html: `<b>O seu código de recuperação de senha é ${code}</b>`
        }
        return smtpObject
    }

    async validateCode(code: string, email: string){

        const codeValidate = String(code)
        const emailValidate = String(email).trim()
        if (String(code).length != 6) throw new Error("Invalid code!")
        new Utils().emailValidation(emailValidate)

        const returnObject: object = {
            code: codeValidate,
            email: emailValidate
        }

        return returnObject
    }
}