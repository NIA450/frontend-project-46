import parseData from "./parser.js";
import _ from "lodash";

const gendiff = (filepath1, filepath2) => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);
  const keys = _.sortBy([...Object.keys(data1), ...Object.keys(data2)]); // Уникальные и отсортированные ключи
  const keysUniq = _.union(keys);
  const result = keysUniq.map((key) => {
    if (!(key in data1)) {
      return `  + ${key}: ${data2[key]}`; // Только во втором файле
    }
    if (!(key in data2)) {
      return `  - ${key}: ${data1[key]}`; // Только в первом файле
    }
    if (data1[key] !== data2[key]) {
      return [
        `  - ${key}: ${data1[key]}`, // Различие из первого файла
        `  + ${key}: ${data2[key]}`, // Различие из второго файла
      ].join("\n");
    }
    return `    ${key}: ${data1[key]}`; // Значения совпадают
  });
  return `{\n${result.join("\n")}\n}`; // Формируем итоговый вывод
};
export default gendiff;
