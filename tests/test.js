import gendiff from "../src/gendiff.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename); // Получаем директорию
const getFixturePath = (filename) => path.join(dirname, '..', 'data', filename);
const expectedPath = getFixturePath('expectedResults.txt');
const expected = fs.readFileSync(expectedPath, 'utf-8');

describe("gendiff", () => {
  const file1 = path.join(dirname, "../data/file1.json");
  const file2 = path.join(dirname, "../data/file2.json");

  test("compare JSON files with differences", () => {
    expect(gendiff(file1, file2)).toEqual(expected);
  });
});