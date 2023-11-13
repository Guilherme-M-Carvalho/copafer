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
exports.StoreEntity = void 0;
const typeorm_1 = require("typeorm");
const address_1 = require("./address");
const contact_1 = require("./contact");
let StoreEntity = class StoreEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id' }),
    __metadata("design:type", Number)
], StoreEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'name', nullable: false, length: 255 }),
    __metadata("design:type", String)
], StoreEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contact_1.ContactEntity, contact => contact.storeId, { cascade: ['insert', 'update'], nullable: true }),
    __metadata("design:type", Array)
], StoreEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_1.AddressEntity, add => add.store, { cascade: ['insert', 'update'], nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'id_address' }),
    __metadata("design:type", address_1.AddressEntity)
], StoreEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: 'deleted', nullable: false, default: false, select: true }),
    __metadata("design:type", Boolean)
], StoreEntity.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], StoreEntity.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], StoreEntity.prototype, "updateDate", void 0);
StoreEntity = __decorate([
    (0, typeorm_1.Entity)('cad_store')
], StoreEntity);
exports.StoreEntity = StoreEntity;
//# sourceMappingURL=store.js.map