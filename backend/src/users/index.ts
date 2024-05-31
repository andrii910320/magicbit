import { db } from "../database/db";

export const find_user = (email?: string, number?: string) => {
  const clearNumber = number?.replace(/\D/g, "")
  const user = db.find((user_in_bd) => {
    if (user_in_bd.email === email?.toLocaleLowerCase() && user_in_bd.number === clearNumber) {
      return user_in_bd;
    }
  });
  return user;
};
