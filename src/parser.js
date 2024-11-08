import fs from "fs";
import path from "path";

const parseData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, "utf-8"); // Читаем данные
  // Преобразование JSON в объект
  return JSON.parse(data); // Возвращаем объект
};
export default parseData;
