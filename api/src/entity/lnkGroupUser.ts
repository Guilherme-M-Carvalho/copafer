import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { User } from "./user";


@Entity('lnk_group_user')
export class LnkGroupUser {

    @PrimaryGeneratedColumn('increment', { name: 'id_group_user', })
    id: number

    @ManyToOne(() => Group, group => group.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false, eager: true })
    @JoinTable({ name: 'id_group' })
    group: Group[]

    @ManyToOne(() => User, user => user.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false, eager: true})
    @JoinTable({ name: 'id_user' })
    user: User[]
}
