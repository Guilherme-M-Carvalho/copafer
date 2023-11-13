import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { PermissionModule } from "./permissionModule";


@Entity('lnk_group_permission')
export class LnkGroupPermission {

    @PrimaryGeneratedColumn('increment', { name: 'id_group_permission' })
    id: number

    @ManyToOne(() => Group, group => group.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false  })
    @JoinTable({ name: 'id_group' })
    group: Group[]

    @ManyToOne(() => PermissionModule, permissionModule => permissionModule.id, { cascade: ['insert', 'update'], nullable: false, eager: true })
    @JoinTable({ name: 'id_permission_module' })
    permission: PermissionModule[]
}
