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
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
let Permission = class Permission {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id_permission' }),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: false, select: true }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Permission.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Permission.prototype, "special", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], Permission.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], Permission.prototype, "updateDate", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)('sys_permission')
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=permission.js.map