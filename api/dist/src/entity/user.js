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
exports.User = void 0;
const lnkGroupUser_1 = require("./lnkGroupUser");
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: "id_user" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, nullable: false, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 6, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "recover_password_code", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { nullable: false, default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { nullable: false, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "auth_change_password", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: 'deleted', nullable: false, default: false, select: false }),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lnkGroupUser_1.LnkGroupUser, lnk => lnk.user, { cascade: ['insert', 'update'], nullable: false }),
    __metadata("design:type", Array)
], User.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], User.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], User.prototype, "updateDate", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('cad_user')
], User);
exports.User = User;
//# sourceMappingURL=user.js.map