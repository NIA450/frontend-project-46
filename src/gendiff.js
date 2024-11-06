import parseData from "./parser.js";
import _ from 'lodash';
const { sortBy } = _;

function gendiff(filepath1, filepath2) {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  const keys = sortBy([...Object.keys(data1), ...Object.keys(data2)]);

  const result = keys.map((key) => {
    if (!(key in data1)) {
      return `  + ${key}: ${data2[key]}`; // Существуют только во втором файле
    } else if (!(key in data2)) {
      return `  - ${key}: ${data1[key]}`; // Существуют только в первом файле
    } else if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`; // Различия
    }
    return `    ${key}: ${data1[key]}`; // Значения совпадают
  });

  return `{\n${result.join("\n")}\n}`;

  //    console.log(`Comparing ${filepath1} and ${filepath2} with format: ${format}`);
  //    console.log('Data from file 1:', data1);
  //    console.log('Data from file 2:', data2);
}
export default gendiff;
