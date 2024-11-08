import gendiff from "../src/gendiff.js";
import fs from "fs";
import path from "path";

// Функция для создания временных файлов
const createFile = (filename, content) => {
  const filepath = path.join(__dirname, filename);
  fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
  return filepath;
};

describe("gendiff", () => {
  afterEach(() => {
    // Удаляем тестовые файлы после каждого теста
    fs.unlinkSync("./file1.json");
    fs.unlinkSync("./file2.json");
  });

  test("compare two identical JSON files", () => {
    const file1 = createFile("file1.json", {
      host: "hexlet.io",
      timeout: 50,
    });
    const file2 = createFile("file2.json", {
      host: "hexlet.io",
      timeout: 50,
    });

    const expected = `{
      host: hexlet.io
      timeout: 50
    }`;

    expect(gendiff(file1, file2)).toEqual(expected);
  });

  test("compare JSON files with different values", () => {
    const file1 = createFile("file1.json", {
      host: "hexlet.io",
      timeout: 50,
    });
    const file2 = createFile("file2.json", {
      host: "hexlet.io",
      timeout: 20,
    });

    const expected = `{
      - timeout: 50
      + timeout: 20
      host: hexlet.io
    }`;

    expect(gendiff(file1, file2)).toEqual(expected);
  });

  test("compare JSON files with different keys", () => {
    const file1 = createFile("file1.json", {
      host: "hexlet.io",
      timeout: 50,
      proxy: "123.234.53.22",
    });
    const file2 = createFile("file2.json", {
      host: "hexlet.io",
      timeout: 20,
      verbose: true,
    });

    const expected = `{
      - proxy: 123.234.53.22
      - timeout: 50
      + timeout: 20
      + verbose: true
      host: hexlet.io
    }`;

    expect(gendiff(file1, file2)).toEqual(expected);
  });

  test("compare JSON files with one file missing a key", () => {
    const file1 = createFile("file1.json", {
      host: "hexlet.io",
      timeout: 50,
    });
    const file2 = createFile("file2.json", {
      timeout: 20,
    });

    const expected = `{
      - host: hexlet.io
      + timeout: 20
      - timeout: 50
    }`;

    expect(gendiff(file1, file2)).toEqual(expected);
  });
});
