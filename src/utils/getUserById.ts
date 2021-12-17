import { document } from "./dynamodbClient";

export const getUserById = async (id: string) => {
  const response = await document
    .query({
      TableName: "users_certificates",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id,
      },
    })
    .promise();

  return response ? response.Items[0] : null;
};
