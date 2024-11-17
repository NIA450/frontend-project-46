import parseData from "./parser.js";
import _ from "lodash";

// const gendiff = (filepath1, filepath2) => {
//   const data1 = parseData(filepath1);
//   const data2 = parseData(filepath2);
//   const keys = _.sortBy([...Object.keys(data1), ...Object.keys(data2)]); // Уникальные и отсортированные ключи
//   const keysUniq = _.union(keys);
//   const result = keysUniq.map((key) => {
//     if (!(key in data1)) {
//       return `  + ${key}: ${data2[key]}`; // Только во втором файле
//     }
//     if (!(key in data2)) {
//       return `  - ${key}: ${data1[key]}`; // Только в первом файле
//     }
//     if (data1[key] !== data2[key]) {
//       return [
//         `  - ${key}: ${data1[key]}`, // Различие из первого файла
//         `  + ${key}: ${data2[key]}`, // Различие из второго файла
//       ].join("\n");
//     }
//     return `    ${key}: ${data1[key]}`; // Значения совпадают
//   });
//   return `{\n${result.join("\n")}\n}`; // Формируем итоговый вывод
// };
// export default gendiff;
const gendiff = (filepath1, filepath2) => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  const buildDiff = (obj1, obj2) => {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2));
    return keys.map((key) => {
      if (!(key in obj1)) {
        return { key, value: obj2[key], status: "added" };
      }
      if (!(key in obj2)) {
        return { key, value: obj1[key], status: "removed" };
      }
      if (obj1[key] !== obj2[key]) {
        if (
          typeof obj1[key] === "object" &&
          obj1[key] !== null &&
          typeof obj2[key] === "object" &&
          obj2[key] !== null
        ) {
          return {
            key,
            children: buildDiff(obj1[key], obj2[key]),
            status: "nested",
          };
        }
        return { key, value1: obj1[key], value2: obj2[key], status: "changed" };
      }
      return { key, value: obj1[key], status: "unchanged" };
    });
  };

  return buildDiff(data1, data2);
};
export default gendiff;
