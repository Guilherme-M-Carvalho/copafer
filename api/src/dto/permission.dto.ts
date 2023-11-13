type Permission = {
    id?: number;
    name: string;
    permission?: { permission: number }[]
    user?: { user: number }[]
}

export class PermissionDTO {
    async validatePermission(permission: Permission, type = 0) {
        if (type === 0) {
            permission.id = Number(permission.id)
            if (!permission.id || isNaN(permission.id)) throw new Error('{"field": "permissionId"}')
        }

        if (!permission.name) throw new Error('{"field": "name"}');
        permission?.permission?.map((permi, i) => {
            if (!permi.permission) throw new Error(`{"field": "permission", "position": ${i}}`);
        })
        let users: number[] = []
        permission?.user?.map((permi, i) => {
            if (!permi.user) throw new Error(`{"field": "user", "position": ${i}}`);
            if (!!users.find(use => use == permi.user)) throw new Error(`{"field": "userDouble", "position": ${i}}`);
            users.push(permi.user)
        })
        return permission;
    }

    async getPermissions(permission: any) {
        permission.map((permi: any) => {
            permi.userCount = 0
            permi?.user?.map((user: any) => {
                if (user.id) {
                    permi.userCount = permi.userCount + 1
                }
            })

            delete permi.user
        })

        return permission;
    }

    getPermissionsLists(permission: any) {

        permission.module?.map((mod: any) => {
            mod.permission?.map((perm: any) => {
                mod[perm.permission.name] = {
                    id: perm.id,
                    checked: false
                }
            })
            delete mod.permission
        })

        return permission;
    }

    getModules(modules: any) {
        let permissions: any = []
        modules.map((mod: any) => {
            mod.permission.map((el: any) => {
                if (!permissions.find((item: any) => item.id === el.id)) {
                    permissions.push({ id: el.id, name: el.permission.name, module: mod.id })
                }
            })
        })
        return permissions
    }
}