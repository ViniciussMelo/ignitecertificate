import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import { compile } from "../utils/compile";
import { generatePDF } from "../utils/generatePDF";
import { document } from "../utils/dynamodbClient";

import { putObjectS3 } from "../utils/putObjectS3";

interface ICreateCertificate {
  id: string;
  name: string;
  grade: string;
}

export const handle = async (event) => {
  const { id, name, grade } = JSON.parse(event.body) as ICreateCertificate;

  await document
    .put({
      TableName: "users_certificates",
      Item: {
        id,
        name,
        grade,
      },
    })
    .promise();

  const date = dayjs().format("DD/MM/YYYY");
  const medalPath = path.join(process.cwd(), "src", "templates", "selo.png");
  const medal = fs.readFileSync(medalPath, "base64");

  const content = await compile({
    date,
    grade,
    id,
    name,
    medal,
  });

  const pdf = await generatePDF(content);

  await putObjectS3(id, pdf);

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Certificate created!",
      url: `${process.env.AWS_BUCKET_URL}/${id}.pdf`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
