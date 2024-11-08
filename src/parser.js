import fs from "fs";
import path from "path";

const parseData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(absolutePath, "utf-8");
  const extname = path.extname(absolutePath);

  switch (extname) {
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file type: ${extname}`);
  }
};

export default parseData;
