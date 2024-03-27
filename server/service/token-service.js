const jwt = require('jsonwebtoken');
const Database = require('../db');


class TokenService extends Database {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '60m'
        });

        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d'
        });


        return {
            accessToken,
            refreshToken,
        }
    }

    async removeToken(refreshToken) {
        await this.query('UPDATE user SET refresh_token = "" WHERE refresh_token = ?', refreshToken);
        return true;
    }

    async saveToken(userId, refreshToken) {
        await this.query('UPDATE user SET refresh_token = ? WHERE id = ? ', refreshToken, userId);
        return refreshToken;
    }
}

module.exports = new TokenService();