import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "./address";
import { ContactEntity } from "./contact";

@Entity('cad_store')
export class StoreEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("varchar", { name: 'name', nullable: false, length: 255 })
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.storeId, { cascade: ['insert', 'update'], nullable: true })
    contact: ContactEntity[]

    @OneToOne(() => AddressEntity, add => add.store, { cascade: ['insert', 'update'], nullable: false })
    @JoinColumn({ name: 'id_address' })
    address: AddressEntity

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}