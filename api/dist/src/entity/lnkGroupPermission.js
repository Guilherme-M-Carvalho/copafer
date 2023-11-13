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
exports.LnkGroupPermission = void 0;
const typeorm_1 = require("typeorm");
const group_1 = require("./group");
const permissionModule_1 = require("./permissionModule");
let LnkGroupPermission = class LnkGroupPermission {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id_group_permission' }),
    __metadata("design:type", Number)
], LnkGroupPermission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_1.Group, group => group.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false }),
    (0, typeorm_1.JoinTable)({ name: 'id_group' }),
    __metadata("design:type", Array)
], LnkGroupPermission.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => permissionModule_1.PermissionModule, permissionModule => permissionModule.id, { cascade: ['insert', 'update'], nullable: false, eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'id_permission_module' }),
    __metadata("design:type", Array)
], LnkGroupPermission.prototype, "permission", void 0);
LnkGroupPermission = __decorate([
    (0, typeorm_1.Entity)('lnk_group_permission')
], LnkGroupPermission);
exports.LnkGroupPermission = LnkGroupPermission;
//# sourceMappingURL=lnkGroupPermission.js.map