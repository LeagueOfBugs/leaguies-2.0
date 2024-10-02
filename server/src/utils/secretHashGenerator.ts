import crypto from 'crypto';
import dotenv from 'dotenv'

/**
 * Generate a Cognito secret hash using HMAC-SHA256.
 * @param username - The username of the user.
 * @returns The computed secret hash.
 */

dotenv.config()

export const generateSecretHash = (username: string): string => {
    const clientSecretKey = process.env.CLIENT_SECRET!;
    const clientId = process.env.COGNITO_CLIENT_ID!;
  return crypto
    .createHmac('SHA256', clientSecretKey)
    .update(username + clientId)
    .digest('base64');
};
