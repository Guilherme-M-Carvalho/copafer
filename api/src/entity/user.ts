import { LnkGroupUser } from "./lnkGroupUser";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cad_user')
export class User {

    @PrimaryGeneratedColumn('increment', { name: "id_user" })
    id: number

    @Column('varchar', { length: 255, nullable: false })
    name: string

    @Column('varchar', { length: 255, nullable: false })
    surname: string

    @Column('varchar', { length: 255, nullable: false })
    email: string

    @Column('varchar', { length: 255, nullable: false, select: false })
    password: string

    @Column('varchar', { length: 6, nullable: true })
    recover_password_code: string

    @Column('boolean', { nullable: false, default: true })
    status: boolean

    @Column('boolean', { nullable: false, default: false })
    auth_change_password: boolean

    @Column("tinyint", { name: 'deleted', nullable: false, default: false, select: false })
    deleted: boolean

    @OneToMany(() => LnkGroupUser, lnk => lnk.user, { cascade: ['insert', 'update'], nullable: false })
    group: LnkGroupUser[]

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate: Date

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate: Date
}