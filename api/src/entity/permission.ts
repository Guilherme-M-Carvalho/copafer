import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn  } from 'typeorm';

@Entity('sys_permission')
export class Permission {

    @PrimaryGeneratedColumn('increment', {name: 'id_permission'})
    id: number

    @Column('varchar', { length: 100, nullable: false, select: true })
    name: string;

    @Column("tinyint", { nullable: false, default: true })
    status: boolean

    @Column("tinyint", { nullable: false, default: false })
    special: boolean

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate: Date

    @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate: Date
}