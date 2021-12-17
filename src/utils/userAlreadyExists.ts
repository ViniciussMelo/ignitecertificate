import { getUserById } from "./getUserById";

export const userAlreadyExists = async (id: string) => {
  const user = await getUserById(id);

  return !!user;
};
