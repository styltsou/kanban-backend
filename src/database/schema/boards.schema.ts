import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';
import { Users } from './users.schema';
import { Workspaces } from './workspaces.schema';

export const Boards = pgTable('boards', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).default('').notNull(),
  workspaceId: uuid('workspace_id').references(() => Workspaces.id),
  createdBy: uuid('created_by').references(() => Users.id),
  createdAt: timestamp('created_at', { mode: 'date', precision: 0, withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 0, withTimezone: true })
    .default(null)
    .$onUpdateFn(() => new Date()),
});
