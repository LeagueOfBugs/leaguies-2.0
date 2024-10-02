"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecretHash = void 0;
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * Generate a Cognito secret hash using HMAC-SHA256.
 * @param username - The username of the user.
 * @returns The computed secret hash.
 */
dotenv_1.default.config();
const generateSecretHash = (username) => {
    const clientSecretKey = process.env.CLIENT_SECRET;
    const clientId = process.env.COGNITO_CLIENT_ID;
    return crypto_1.default
        .createHmac('SHA256', clientSecretKey)
        .update(username + clientId)
        .digest('base64');
};
exports.generateSecretHash = generateSecretHash;
