import bcrypt from 'bcrypt';
import crypto from 'crypto'

const secret = 'LZCTCR5hBgToP3wGbLBIhAw2WjBSmx1c'
export class Utils {

    dateNowWithUTC(date: Date, dbUTC: number, systemUTC: number = 0) {
        const hours = dbUTC - systemUTC;
        date.setHours(date.getHours() + hours);
        const dateString = date.toISOString().replace('T', ' ').replace('Z', '')
        return dateString;
    }

    removeSpecialCharacters(value: any) {
        return value.replace(/[^0-9]/g, '')
    }

    emailValidation(email: any) {
        const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailRegexp.test(email) == false) {
            throw new Error('{"field": "email"}');
        }
    }

    dateValidate(date: any) {

        // Date format: YYYY-MM-DD
        const datePattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

        // Check if the date string format is a match
        const matchArray = date.match(datePattern);
        if (matchArray == null) {
            return false;
        }

        // Remove any non digit characters
        const dateString = date.replace(/\D/g, '');

        // Parse integer values from the date string
        const year = parseInt(dateString.substr(0, 4));
        const month = parseInt(dateString.substr(4, 2));
        const day = parseInt(dateString.substr(6, 2));

        // Define the number of days per month
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            daysInMonth[1] = 29;
        }

        if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
            return false;
        }

        return true;
    }

    zipCodeValidation(req: any, country: any) {
        if (country.toUpperCase() == "BRASIL") {
            const zipCodeRegex = /^[0-9]{5,5}([- ]?[0-9]{3,3})?$/;
            if (zipCodeRegex.test(req) == false) {
                throw new Error("Invalid Zip Code!");
            }
        }
    }

    cnpjValidation(cnpj: any) {
        if (!cnpj) return false

        // Aceita receber o valor como string, número ou array com todos os dígitos
        const isString = typeof cnpj === 'string'
        const validTypes = isString || Number.isInteger(cnpj) || Array.isArray(cnpj)

        // Elimina valor em formato inválido
        if (!validTypes) return false

        // Filtro inicial para entradas do tipo string
        if (isString) {
            // Limita ao máximo de 18 caracteres, para CNPJ formatado
            if (cnpj.length > 18) return false

            // Teste Regex para veificar se é uma string apenas dígitos válida
            const digitsOnly = /^\d{14}$/.test(cnpj)
            // Teste Regex para verificar se é uma string formatada válida
            const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpj)

            // Se o formato é válido, usa um truque para seguir o fluxo da validação
            if (digitsOnly || validFormat) true
            // Se não, retorna inválido
            else return false
        }

        // Guarda um array com todos os dígitos do valor
        const match = cnpj.toString().match(/\d/g)
        const numbers = Array.isArray(match) ? match.map(Number) : []

        // Valida a quantidade de dígitos
        if (numbers.length !== 14) return false

        // Elimina inválidos com todos os dígitos iguais
        const items = [...new Set(numbers)]
        if (items.length === 1) return false

        // Cálculo validador
        const calc = (x: any) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
                const n = slice[x - i]
                sum += n * factor--
                if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11)

            return result > 9 ? 0 : result
        }

        // Separa os 2 últimos dígitos de verificadores
        const digits = numbers.slice(12)

        // Valida 1o. dígito verificador
        const digit0 = calc(12)
        if (digit0 !== digits[0]) return false

        // Valida 2o. dígito verificador
        const digit1 = calc(13)
        return digit1 === digits[1]
    }

    cpfValidation(cpf: any) {
        // Extrai somente os números
        cpf = cpf.replace(/[^0-9]/g, '')

        // Verifica se foi informado todos os digitos corretamente
        if (cpf.length != 11) {
            return false
        }

        const b = new RegExp(/(\d)\1{10}/g).test(cpf)
        if (b) {
            return false;
        }

        let t: number;
        let d: number;
        let c: number;
        // Faz o calculo para validar o CPF
        for (t = 9; t < 11; t++) {
            for (d = 0, c = 0; c < t; c++) {
                d += cpf[c] * ((t + 1) - c)
            }

            d = ((10 * d) % 11) % 10;

            if (cpf[c] != d) {
                return false
            }
        }
        return true;
    }

    formateStringToNumber(stringValue: string) {
        var value: number;

        value = parseFloat(stringValue.replace(/\./g, '').replace(',', '.'))

        return value
    }

    async encrypt(value: string) {
        const iv = Buffer.from(crypto.randomBytes(16))
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv)
        let encrypted = cipher.update(value)
        encrypted = Buffer.concat([encrypted, cipher.final()])

        return `${iv.toString('hex')}:${encrypted.toString('hex')}`
    }

    async decrypt(value: string) {
        const [iv, encrypted] = value.split(':')
        const ivBuffer = Buffer.from(iv, 'hex')
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer)
        let content = decipher.update(Buffer.from(encrypted, 'hex'))
        content = Buffer.concat([content, decipher.final()])

        return content.toString()
    }

    async encryptPassword(req: string) {
        const encryptPassword = bcrypt.hashSync(req, 10)
        return encryptPassword
    }

}