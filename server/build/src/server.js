"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const secretHashGenerator_1 = require("./utils/secretHashGenerator");
dotenv_1.default.config();
const cognitoClient = new client_cognito_identity_provider_1.CognitoIdentityProviderClient({
    region: process.env.COGNITO_REGION,
});
const server = (0, fastify_1.default)();
server.register(require('@fastify/formbody'));
server.get('/ping', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return 'pong\n';
}));
server.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            message: 'Username and password are required',
        });
    }
    const secretHash = (0, secretHashGenerator_1.generateSecretHash)(username);
    console.log('secretHash', secretHash);
    const params = {
        AuthFlow: client_cognito_identity_provider_1.AuthFlowType.USER_PASSWORD_AUTH,
        SecretHash: secretHash,
        ClientId: process.env.COGNITO_CLIENT_ID,
        AuthParameters: {
            SECRET_HASH: secretHash,
            USERNAME: username,
            PASSWORD: password,
        },
    };
    try {
        const command = new client_cognito_identity_provider_1.InitiateAuthCommand(params);
        console.log('command', command);
        const response = yield cognitoClient.send(command);
        return res.status(200).send({
            message: 'Login successful',
            data: response.AuthenticationResult,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Login failed:', error);
            return res.status(401).send({
                message: 'Login failed',
                error: error.message,
            });
        }
        else {
            console.error('Unknown error:', error);
            return res.status(500).send({
                message: 'Internal Server Error',
            });
        }
    }
}));
server.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    // Check that required fields are provided
    if (!username || !password || !email) {
        return res.status(400).send({
            message: 'Email and password are required',
        });
    }
    const secretHash = (0, secretHashGenerator_1.generateSecretHash)(username);
    const params = {
        ClientId: process.env.COGNITO_CLIENT_ID,
        SecretHash: secretHash,
        Username: username,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email,
            },
        ],
    };
    try {
        const command = new client_cognito_identity_provider_1.SignUpCommand(params);
        const response = yield cognitoClient.send(command);
        return res.status(201).send({
            message: 'User registered successfully',
            data: response,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('User registration failed:', error);
            return res.status(400).send({
                message: 'User registration failed',
                error: error.message,
            });
        }
        else {
            console.error('Unknown error:', error);
            return res.status(500).send({
                message: 'Internal Server Error',
            });
        }
    }
}));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
