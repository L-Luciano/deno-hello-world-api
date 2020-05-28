// import { config } from 'https://deno.land/x/dotenv/mod.ts';
// const env = config();
const env = Deno.env.toObject();

export const APP_HOST = env.APP_HOST || '127.0.0.1';
export const APP_PORT = env.APP_PORT || 4000;
