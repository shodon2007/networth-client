const Database = require('../db');
const bcrypt = require('bcrypt');
const uuid =require('uuid');
const mailService = require('./mail-service');  
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dtos');
const ApiError = require('../exceptions/api-error');

class UserService extends Database {
    async registration(email, password) {
        const res = await this.query('SELECT * FROM user WHERE email = ?', email);
        if (res.length !== 0) {
            throw ApiError.BadRequest(`Пользователь с email ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        await this.query(
            'INSERT INTO user (email, password, activationLink, isActivated) VALUES (?, ?, ?, false)', 
            email, hashPassword, activationLink
        );
        const [user] = await this.query('SELECT * FROM user WHERE email = ?', email);
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens,user: userDto}
    }

    async login(email, password) {
        const res = await this.query('SELECT * FROM user WHERE email = ?', email);

        if (res.length === 0) {
            throw ApiError.BadRequest(`Пользователя с почтой ${email} не существует`);
        }
        const isPasswordEqual = await bcrypt.compare(password, res[0].password);
        if (!isPasswordEqual) {
            throw ApiError.BadRequest(`Неправльный пароль`);
        }

        const userDto = new UserDto(res[0]);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens,user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async activate(activateLink) {
        await this.query('UPDATE user SET isActivated = 1 WHERE activationLink = ?', activateLink);
        return true;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const tokenIsValidate = tokenService.validateRefreshToken(refreshToken);
        const user = await tokenService.findToken(refreshToken);
        if (!tokenIsValidate || !user) {
            throw ApiError.UnauthorizedError();
        }

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens,user: userDto}
    }

    async getAllUsers() {
        return await this.query('SELECT * FROM user');
    }
}

module.exports = new UserService();