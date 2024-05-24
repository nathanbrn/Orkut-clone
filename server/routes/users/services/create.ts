import { User, db } from "~/data/database";

export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody(event);

  const user: User = {
    id: uuid(),
    name,
    email,
    password,
  };

  db.users.push(user);

  return user;
});

function uuid() {
  const digits = "0123456789abcdefghijlmnopqrstuvxz";
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    uuid += digits[Math.floor(Math.random() * 16)];
  }
  return uuid;
}
