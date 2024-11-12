import fs from "fs";
import path from "path";

const parseData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, "utf-8"); // Читаем данные
  const extname = path.extname(absolutePath); // Получаем расширение файла

  // Проверяем расширение и парсим данные
  switch (extname) {
    case '.json':
      return JSON.parse(data); // Парсим JSON
    default:
      throw new Error(`Unsupported file type: ${extname}`); // Сообщение об ошибке
  }
};

export default parseData;
