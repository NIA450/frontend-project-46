import gendiff from "../src/gendiff.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { expectedResults } from "../data/expectedResults.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Получаем директорию

// Получаем текущий путь к файлу
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Получаем директорию

describe("gendiff", () => {
  const file1 = path.join(__dirname, "../data/file1.json"); // Полный путь к file1.json
  const file2 = path.join(__dirname, "../data/file2.json"); // Полный путь к file2.json

  test("compare JSON files with differences", () => {
    const expected = `{
      - timeout: 50
      + timeout: 20
      host: hexlet.io
      - proxy: 123.234.53.22
      + verbose: true
    }`;

    expect(gendiff(file1, file2)).toEqual(expected);
  });
});
