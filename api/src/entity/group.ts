import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { LnkGroupPermission } from './lnkGroupPermission';
import { LnkGroupUser } from './lnkGroupUser';

@Entity('cad_group')
export class Group {

    @PrimaryGeneratedColumn('increment', {name: 'id_group'})
    id: number

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column("tinyint", { nullable: false, default: true })
    status: boolean
    
    @OneToMany(() => LnkGroupPermission, lnk => lnk.group, { cascade: ['insert', 'update'], nullable: false })
    permission: LnkGroupPermission[]

    @OneToMany(() => LnkGroupUser, lnk => lnk.group, { cascade: ['insert', 'update'], nullable: false })
    user: LnkGroupUser[]

    @Column('tinyint', { name: 'deleted', nullable: false, default: false, select: false })
    deleted: boolean

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate: Date

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate: Date
}