import { pgTable, varchar, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { Users } from './users.schema';
import { Boards } from './boards.schema';

export const boardMemberRole = pgEnum('board_member_role', ['admin', 'member', 'observer']);

export const BoardMembers = pgTable('board_members', {
  memberId: varchar('member_id', { length: 256 })
    .unique()
    .references(() => Users.id)
    .notNull(),
  workspaceId: uuid('workspace_id').references(() => Boards.id),
  role: boardMemberRole('role').default('member'),
  createdAt: timestamp('created_at', { mode: 'date', precision: 0, withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 0, withTimezone: true })
    .default(null)
    .$onUpdateFn(() => new Date()),
});
