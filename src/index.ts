import { Context, APIGatewayEvent, Callback } from 'aws-lambda';
import { LambdaEnv } from './env';
import * as AWS from 'aws-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

export const handler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
  const env: LambdaEnv = process.env as any;
  AWS.config.region = env.awsRegion;
};
