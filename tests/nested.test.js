import gendiff from "../src/gendiff.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const expectedPath = path.join(dirname, "../data/expectedNestedResults.txt");

const expected = fs.readFileSync(expectedPath, "utf-8");

describe("gendiff with nested JSON files", () => {
  const file1 = path.join(dirname, "../data/file1.json");
  const file2 = path.join(dirname, "../data/file2.json");

  test("compare nested JSON files", () => {
    expect(gendiff(file1, file2)).toEqual(expected);
  });
});