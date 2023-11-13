"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEntity = void 0;
const typeorm_1 = require("typeorm");
const store_1 = require("./store");
let ContactEntity = class ContactEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id' }),
    __metadata("design:type", Number)
], ContactEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: 'ddi', nullable: false, width: 4 }),
    __metadata("design:type", Number)
], ContactEntity.prototype, "ddi", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: 'telephone', nullable: false, width: 11 }),
    __metadata("design:type", Number)
], ContactEntity.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => store_1.StoreEntity, store => store.contact, { cascade: ['insert', 'update'], nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_store' }),
    __metadata("design:type", store_1.StoreEntity)
], ContactEntity.prototype, "storeId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: 'deleted', nullable: false, default: false, select: true }),
    __metadata("design:type", Boolean)
], ContactEntity.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], ContactEntity.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], ContactEntity.prototype, "updateDate", void 0);
ContactEntity = __decorate([
    (0, typeorm_1.Entity)('cad_contact')
], ContactEntity);
exports.ContactEntity = ContactEntity;
//# sourceMappingURL=contact.js.map