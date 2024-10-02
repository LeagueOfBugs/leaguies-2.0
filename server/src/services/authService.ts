import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { generateSecretHash } from "../utils/secretHashGenerator";

const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.COGNITO_REGION,
});

export const loginService = async (username: string, password: string) => {
  const secretHash = generateSecretHash(username);

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

  const command = new InitiateAuthCommand(params);
  const response = await cognitoClient.send(command);
  return response.AuthenticationResult;
};

export const registerService = async (
  username: string,
  password: string,
  email: string
) => {
  const secretHash = generateSecretHash(username);

  const params = {
    ClientId: process.env.COGNITO_CLIENT_ID!,
    SecretHash: secretHash,
    Username: username,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  };

  const command = new SignUpCommand(params);
  const response = await cognitoClient.send(command);
  return response;
};
