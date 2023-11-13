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
exports.Module = void 0;
const typeorm_1 = require("typeorm");
const permissionModule_1 = require("./permissionModule");
let Module = class Module {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id_module' }),
    __metadata("design:type", Number)
], Module.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, nullable: false }),
    __metadata("design:type", String)
], Module.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Module.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permissionModule_1.PermissionModule, lnk => lnk.module, { cascade: ['insert', 'update'], nullable: false }),
    __metadata("design:type", Array)
], Module.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false }),
    __metadata("design:type", Date)
], Module.prototype, "createDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false }),
    __metadata("design:type", Date)
], Module.prototype, "updateDate", void 0);
Module = __decorate([
    (0, typeorm_1.Entity)('sys_module')
], Module);
exports.Module = Module;
//# sourceMappingURL=module.js.map