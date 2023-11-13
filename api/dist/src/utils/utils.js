"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const secret = 'LZCTCR5hBgToP3wGbLBIhAw2WjBSmx1c';
class Utils {
    dateNowWithUTC(date, dbUTC, systemUTC = 0) {
        const hours = dbUTC - systemUTC;
        date.setHours(date.getHours() + hours);
        const dateString = date.toISOString().replace('T', ' ').replace('Z', '');
        return dateString;
    }
    removeSpecialCharacters(value) {
        return value.replace(/[^0-9]/g, '');
    }
    emailValidation(email) {
        const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegexp.test(email) == false) {
            throw new Error('{"field": "email"}');
        }
    }
    dateValidate(date) {
        const datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
        const matchArray = date.match(datePattern);
        if (matchArray == null) {
            return false;
        }
        const dateString = date.replace(/\D/g, '');
        const year = parseInt(dateString.substr(0, 4));
        const month = parseInt(dateString.substr(4, 2));
        const day = parseInt(dateString.substr(6, 2));
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            daysInMonth[1] = 29;
        }
        if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
            return false;
        }
        return true;
    }
    zipCodeValidation(req, country) {
        if (country.toUpperCase() == "BRASIL") {
            const zipCodeRegex = /^[0-9]{5,5}([- ]?[0-9]{3,3})?$/;
            if (zipCodeRegex.test(req) == false) {
                throw new Error("Invalid Zip Code!");
            }
        }
    }
    cnpjValidation(cnpj) {
        if (!cnpj)
            return false;
        const isString = typeof cnpj === 'string';
        const validTypes = isString || Number.isInteger(cnpj) || Array.isArray(cnpj);
        if (!validTypes)
            return false;
        if (isString) {
            if (cnpj.length > 18)
                return false;
            const digitsOnly = /^\d{14}$/.test(cnpj);
            const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
            if (digitsOnly || validFormat)
                true;
            else
                return false;
        }
        const match = cnpj.toString().match(/\d/g);
        const numbers = Array.isArray(match) ? match.map(Number) : [];
        if (numbers.length !== 14)
            return false;
        const items = [...new Set(numbers)];
        if (items.length === 1)
            return false;
        const calc = (x) => {
            const slice = numbers.slice(0, x);
            let factor = x - 7;
            let sum = 0;
            for (let i = x; i >= 1; i--) {
                const n = slice[x - i];
                sum += n * factor--;
                if (factor < 2)
                    factor = 9;
            }
            const result = 11 - (sum % 11);
            return result > 9 ? 0 : result;
        };
        const digits = numbers.slice(12);
        const digit0 = calc(12);
        if (digit0 !== digits[0])
            return false;
        const digit1 = calc(13);
        return digit1 === digits[1];
    }
    cpfValidation(cpf) {
        cpf = cpf.replace(/[^0-9]/g, '');
        if (cpf.length != 11) {
            return false;
        }
        const b = new RegExp(/(\d)\1{10}/g).test(cpf);
        if (b) {
            return false;
        }
        let t;
        let d;
        let c;
        for (t = 9; t < 11; t++) {
            for (d = 0, c = 0; c < t; c++) {
                d += cpf[c] * ((t + 1) - c);
            }
            d = ((10 * d) % 11) % 10;
            if (cpf[c] != d) {
                return false;
            }
        }
        return true;
    }
    formateStringToNumber(stringValue) {
        var value;
        value = parseFloat(stringValue.replace(/\./g, '').replace(',', '.'));
        return value;
    }
    async encrypt(value) {
        const iv = Buffer.from(crypto_1.default.randomBytes(16));
        const cipher = crypto_1.default.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
        let encrypted = cipher.update(value);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    }
    async decrypt(value) {
        const [iv, encrypted] = value.split(':');
        const ivBuffer = Buffer.from(iv, 'hex');
        const decipher = crypto_1.default.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer);
        let content = decipher.update(Buffer.from(encrypted, 'hex'));
        content = Buffer.concat([content, decipher.final()]);
        return content.toString();
    }
    async encryptPassword(req) {
        const encryptPassword = bcrypt_1.default.hashSync(req, 10);
        return encryptPassword;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map