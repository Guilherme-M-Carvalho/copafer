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
exports.AddressEntity = void 0;
const typeorm_1 = require("typeorm");
const store_1 = require("./store");
let AddressEntity = class AddressEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id' }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'cep', nullable: false, length: 255 }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'address', nullable: false, length: 255 }),
    __metadata("design:type", String)
], AddressEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'complement', nullable: false, length: 255 }),
    __metadata("design:type", String)
], AddressEntity.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'neighborhood', nullable: false, length: 255 }),
    __metadata("design:type", String)
], AddressEntity.prototype, "neighborhood", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'locality', nullable: false, length: 255 }),
    __metadata("design:type", String)
], AddressEntity.prototype, "locality", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: 'uf', nullable: false, length: 255 }),
    __metadata("design:type", String)
], AddressEntity.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: 'number', nullable: false, width: 8 }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => store_1.StoreEntity, store => store.address, { cascade: ['insert', 'update'], nullable: true }),
    __metadata("design:type", store_1.StoreEntity)
], AddressEntity.prototype, "store", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: 'deleted', nullable: false, default: false, select: true }),
    __metadata("design:type", Boolean)
], AddressEntity.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], AddressEntity.prototype, "updateDate", void 0);
AddressEntity = __decorate([
    (0, typeorm_1.Entity)('cad_address')
], AddressEntity);
exports.AddressEntity = AddressEntity;
//# sourceMappingURL=address.js.map