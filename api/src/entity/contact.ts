import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { StoreEntity } from "./store";


@Entity('cad_contact')
export class ContactEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("int", { name: 'ddi', nullable: false, width: 4 })
    ddi: number;

    @Column("bigint", { name: 'telephone', nullable: false, width: 11 })
    telephone: number;

    @ManyToOne(() => StoreEntity, store => store.contact, { cascade: ['insert', 'update'], nullable: true })
    @JoinColumn({ name: 'id_store' })
    storeId?: StoreEntity

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}