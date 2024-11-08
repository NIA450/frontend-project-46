import gendiff from "../src/gendiff.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Получаем директорию
import { expectedResults } from "../data/expectedResults.js";

describe("gendiff", () => {
  const file1 = path.join(__dirname, "../data/file1.json");
  const file2 = path.join(__dirname, "../data/file2.json");

  test("compare JSON files with differences", () => {
    expect(gendiff(file1, file2)).toEqual(expectedResults.differences);
  });
});
