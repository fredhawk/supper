import { integer, pgSchema, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// export const users = pgTable('users', {
// 	email: text('email').notNull(),
// 	name: text('name'),
// 	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
// });

// export const schema = pgSchema("public")

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
    github_id: integer('github_id').unique(),
    username: text('username')
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull(),
});

