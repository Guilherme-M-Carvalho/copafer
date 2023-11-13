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
exports.PermissionModule = void 0;
const typeorm_1 = require("typeorm");
const permission_1 = require("./permission");
const module_1 = require("./module");
let PermissionModule = class PermissionModule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id_permission_module' }),
    __metadata("design:type", Number)
], PermissionModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permission_1.Permission, permission => permission.id, { cascade: ['insert', 'update'], nullable: false, eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'id_permission' }),
    __metadata("design:type", Array)
], PermissionModule.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_1.Module, module => module.id, { cascade: ['insert', 'update'], nullable: false, eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'id_module' }),
    __metadata("design:type", Array)
], PermissionModule.prototype, "module", void 0);
PermissionModule = __decorate([
    (0, typeorm_1.Entity)('sys_permission_module')
], PermissionModule);
exports.PermissionModule = PermissionModule;
//# sourceMappingURL=permissionModule.js.map