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
exports.LnkGroupUser = void 0;
const typeorm_1 = require("typeorm");
const group_1 = require("./group");
const user_1 = require("./user");
let LnkGroupUser = class LnkGroupUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'id_group_user', }),
    __metadata("design:type", Number)
], LnkGroupUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_1.Group, group => group.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false, eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'id_group' }),
    __metadata("design:type", Array)
], LnkGroupUser.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, user => user.id, { cascade: ['insert', 'update'], orphanedRowAction: 'delete', nullable: false, eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'id_user' }),
    __metadata("design:type", Array)
], LnkGroupUser.prototype, "user", void 0);
LnkGroupUser = __decorate([
    (0, typeorm_1.Entity)('lnk_group_user')
], LnkGroupUser);
exports.LnkGroupUser = LnkGroupUser;
//# sourceMappingURL=lnkGroupUser.js.map