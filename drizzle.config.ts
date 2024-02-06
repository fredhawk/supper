import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
    schema: './src/lib/server/schema/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL! as string
    },
    schemaFilter: 'public',
    verbose: true
} satisfies Config;
