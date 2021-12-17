import fs from "fs";
import path from "path";
import handlebars from "handlebars";

interface ITemplate {
  id: string;
  name: string;
  grade: string;
  date: string;
  medal: string;
}

export const compile = async ({ id, name, grade, date, medal }: ITemplate) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "templates",
    "certificate.hbs"
  );

  const html = fs.readFileSync(filePath, "utf-8");

  return handlebars.compile(html)({ id, name, grade, date, medal });
};
