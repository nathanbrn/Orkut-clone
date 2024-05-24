import { db } from "~/data/database";

export default defineEventHandler(async () => {
  const { users } = db;

  return users;
});
