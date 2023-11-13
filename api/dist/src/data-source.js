"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const MainSeeder_1 = require("./seed/MainSeeder");
const port = process.env.DB_PORT;
const options = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [__dirname + '/../src/entity/*{.ts,.js}'],
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    seeds: [MainSeeder_1.MainSeeder],
    subscribers: [],
};
exports.AppDataSource = new typeorm_1.DataSource(options);
//# sourceMappingURL=data-source.js.map