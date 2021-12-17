import { APIGatewayProxyHandler } from "aws-lambda";

import { getUserById } from "../utils/getUserById";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;

  const userCertificate = await getUserById(id);

  if (!userCertificate) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid certificate!",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Valid certificate!",
      name: userCertificate.name,
      url: `${process.env.AWS_BUCKET_URL}/${id}.pdf`,
    }),
  };
};
