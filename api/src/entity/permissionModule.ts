import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable  } from 'typeorm';
import { Permission } from './permission';
import { Module } from './module';

@Entity('sys_permission_module')
export class PermissionModule {

    @PrimaryGeneratedColumn('increment', {name: 'id_permission_module'})
    id: number

    @ManyToOne(() => Permission, permission => permission.id, { cascade: ['insert', 'update'], nullable: false, eager: true })
    @JoinTable({ name: 'id_permission' })
    permission: Permission[]

    @ManyToOne(() => Module, module => module.id, { cascade: ['insert', 'update'], nullable: false, eager: true })
    @JoinTable({ name: 'id_module' })
    module: Module[]
}