import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';
import { Users } from './users.schema';

export const Workspaces = pgTable('workspaces', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).default('').notNull(),
  createdAt: timestamp('created_at', { mode: 'date', precision: 0, withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 0, withTimezone: true })
    .default(null)
    .$onUpdateFn(() => new Date()),
  createdBy: uuid('created_by').references(() => Users.id),
});
