import fastify from 'fastify'
import dotenv from 'dotenv'
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { generateSecretHash } from './utils/secretHashGenerator';
dotenv.config()

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.COGNITO_REGION,
});

const server = fastify()

server.register(require('@fastify/formbody'));

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.post('/login', async (req, res) => {
  const { username, password } = req.body as { username: string; password: string };

  if (!username || !password) { 
    return res.status(400).send({
      message: 'Username and password are required',
    });
  }

  const secretHash = generateSecretHash(username!);
console.log('secretHash', secretHash)
  const params = {
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    SecretHash: secretHash,
    ClientId: process.env.COGNITO_CLIENT_ID,
    AuthParameters: {
      SECRET_HASH: secretHash,
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    console.log('command', command)
    const response = await cognitoClient.send(command);

    return res.status(200).send({
      message: 'Login successful',
      data: response.AuthenticationResult,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Login failed:', error);
      return res.status(401).send({
        message: 'Login failed',
        error: error.message,
      });
    } else {
      console.error('Unknown error:', error);
      return res.status(500).send({
        message: 'Internal Server Error',
      });
    }
  }
});

server.post('/register', async (req, res) => {
  const { username, password, email } = req.body as { username: string; password: string; email: string };

  // Check that required fields are provided
  if (!username ||!password || !email) {
    return res.status(400).send({
      message: 'Email and password are required',
    });
  }

  const secretHash = generateSecretHash(username!);

  const params = {
    ClientId: process.env.COGNITO_CLIENT_ID!,
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
    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);

    return res.status(201).send({
      message: 'User registered successfully',
      data: response,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('User registration failed:', error);
      return res.status(400).send({
        message: 'User registration failed',
        error: error.message,
      });
    } else {
      console.error('Unknown error:', error);
      return res.status(500).send({
        message: 'Internal Server Error',
      });
    }
  }
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})