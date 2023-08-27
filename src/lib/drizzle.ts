import { pgTable, serial, integer, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
export const cartColumns = pgTable("cartdata", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_title: varchar("product_title").notNull(),
  image_url: varchar("image_url").notNull(),
  product_price: integer("product_price").notNull(),
  product_quantity: integer("product_quantity").notNull(),
});

export const db = drizzle(sql);

// import { pgTable, serial, integer, varcharz } from "drizzle-orm/pg-core";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import { sql } from "@vercel/postgres";
// export const cartTable = pgTable("cart", {
//   id: serial("id").primaryKey(),
//   user_id: varchar("user_id", { length: 255 }).notNull(),
//   product_id: varchar("product_id", { length: 255 }).notNull(),
//   quantity: integer("quantity").notNull(),
// });

// export const db = drizzle(sql);
