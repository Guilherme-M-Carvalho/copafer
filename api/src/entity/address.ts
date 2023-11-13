import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { StoreEntity } from "./store";


@Entity('cad_address')
export class AddressEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("varchar", { name: 'cep', nullable: false, length: 255 })
    cep: number;
    
    @Column("varchar", { name: 'address', nullable: false, length: 255 })
    address: string;

    @Column("varchar", { name: 'complement', nullable: false, length: 255 })
    complement: string;

    @Column("varchar", { name: 'neighborhood', nullable: false, length: 255 })
    neighborhood: string;

    @Column("varchar", { name: 'locality', nullable: false, length: 255 })
    locality: string;

    @Column("varchar", { name: 'uf', nullable: false, length: 255 })
    uf: string;

    @Column("int", { name: 'number', nullable: false, width: 8 })
    number: number;

    @OneToOne(() => StoreEntity, store => store.address, {cascade: ['insert', 'update'], nullable: true})
    store?: StoreEntity

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}