import { pgTable, timestamp, uuid, varchar} from "drizzle-orm/pg-core";

export const application = pgTable('application', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', {length: 256}).notNull(),
    createdAt: timestamp('created-at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()


})

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().notNull(),
    name: varchar("name", {length: 256}).notNull(),
    email: varchar('email', {length: 256}).notNull(),
    applicationId: uuid('applicationId').references(() => application.id),
    password: varchar('password', {length: 256}).notNull(),
    createdAt: timestamp('created-at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()

})