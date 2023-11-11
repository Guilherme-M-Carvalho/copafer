import { ContactEntity } from "../../entity/contact";
import { StoreEntity } from "../../entity/store";

export class Contact implements ContactEntity {

    id?: number
    ddi: number
    telephone: number
    storeId?: StoreEntity
    deleted?: boolean
    createDate?: Date
    updateDate?: Date

    constructor({
        id,
        ddi,
        telephone,
        storeId,
        deleted,
        createDate,
        updateDate
    }: ContactEntity) {
        this.id = id
        this.ddi = ddi
        this.telephone = telephone
        this.storeId = storeId
        this.deleted = deleted
        this.createDate = createDate
        this.updateDate = updateDate
    }

    handleValidationTelephone(i?: number) {
        if (String(this.telephone).length < 10 || String(this.telephone).length > 11) {
            throw new Error(`{"field": "telephone", "message": "O telephone deve conter entre 10 e 11 digitos", "position": "${i}"}`)
        }
        if (String(this.ddi).length > 4) {
            throw new Error(`{"field": "ddi", "message": "O ddi deve conter no maximo 4 digitos", "position": "${i}"}`)
        }
        return true
    }
}