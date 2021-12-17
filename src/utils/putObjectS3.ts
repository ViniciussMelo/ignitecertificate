import "dotenv/config";
import { S3 } from "aws-sdk";

export const putObjectS3 = async (id: string, pdf: Buffer) => {
  const s3 = new S3();

  await s3
    .putObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${id}.pdf`,
      ACL: "public-read",
      Body: pdf,
      ContentType: "application/pdf",
    })
    .promise();
};
