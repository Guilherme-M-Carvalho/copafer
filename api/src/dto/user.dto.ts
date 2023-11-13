import { Utils } from "../utils/utils";

type User = {
    id?: number;
    name: string;
    worker: number;
    surname: string;
    email: string;
    password?: string;
    group?: {group: number; id?: number}[]
}


export class UserDTO {
    async validateUser(user: any, type = 0) {
        if (type === 0) {
            user.id = Number(user.id)
            if (!user.id || isNaN(user.id)) throw new Error('{"field": "userId"}')
        }
        if (!user.name) throw new Error('{"field": "name"}');
        if (!user.worker) throw new Error('{"field": "worker"}')
        if (!user.email) throw new Error('{"field": "email"}')
        new Utils().emailValidation(user.email);
        if (type == 1 && !user?.password) throw new Error('{"field": "password"}')
        if (user?.password?.length < 8) throw new Error('{"field": "passwordLength"}')
        if(!!user?.password){
            user.password = await new Utils().encryptPassword(user.password);
        }
        let groups: number[] = []
        user?.group?.map((group: any, i: number) => {
            if (!group.group) throw new Error(`{"field": "group", "position": ${i}}`);
            if(!!groups.find(use =>  use == group.group)) throw new Error(`{"field": "groupDouble", "position": ${i}}`);
            groups.push(group.group)
        })
        const worker = user.worker
        delete user.worker
        if(type == 0){
            delete user.email
        }
        if(type == 0 && !user?.password){
            delete user.password
        }
        const data: User = user
        return {data, worker};
    }


    async getUsers(users: any) {
        users.map((user: any) => {
            user.groups = ""
            user.group.map((group: any, i: number) => {
                user.groups += `${group.group.name}${(user.group.length -1) == i ? "" : ","} `
            })
            delete user.group
        })

        return users;
    }

   
    async getLists(lists: any) {
        lists.permission.map((user: any) => {
            delete user.user
        })

        return lists;
    }

}