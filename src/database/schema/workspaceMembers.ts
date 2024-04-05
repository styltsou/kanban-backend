import { pgTable, varchar, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { Users } from './users.schema';
import { Workspaces } from './workspaces.schema';

export const workspaceMemberRole = pgEnum('workspace_member_role', ['admin', 'member']);

export const WorkspaceMembers = pgTable('workspace_members', {
  memberId: varchar('member_id', { length: 256 })
    .unique()
    .references(() => Users.id)
    .notNull(),
  workspaceId: uuid('workspace_id').references(() => Workspaces.id),
  role: workspaceMemberRole('role').default('member'),
  createdAt: timestamp('created_at', { mode: 'date', precision: 0, withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 0, withTimezone: true })
    .default(null)
    .$onUpdateFn(() => new Date()),
});
