import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private'
// for query purposes
export const queryClient = postgres(DATABASE_URL as string);
export const db = drizzle(queryClient);
