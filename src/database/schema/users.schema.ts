import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  email: varchar('email', { length: 256 }).unique().notNull(),
  fistName: varchar('first_name', { length: 256 }).notNull(),
  lastName: varchar('last_name', { length: 256 }).notNull(),
  username: varchar('username', { length: 256 }).unique(),
  avatarUrl: text('avatar_url').unique().notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 0, withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 0, withTimezone: true })
    .default(null)
    .$onUpdateFn(() => new Date()),
});
