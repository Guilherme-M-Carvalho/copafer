import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PermissionModule } from './permissionModule';

@Entity('sys_module')
export class Module {

    @PrimaryGeneratedColumn('increment', {name: 'id_module'})
    id: number

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column("tinyint", { nullable: false, default: false })
    status: boolean

    @OneToMany(() => PermissionModule, lnk => lnk.module, { cascade: ['insert', 'update'], nullable: false })
    permission: PermissionModule[]

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate: Date

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate: Date
}