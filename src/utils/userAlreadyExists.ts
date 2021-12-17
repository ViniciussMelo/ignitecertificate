import { getUserById } from "./getUserById";

export const userAlreadyExists = async (id: string) => {
  const response = await getUserById(id);

  if (!response) return false;

  const userAlreadyExists = response.Items[0];

  return userAlreadyExists;
};
