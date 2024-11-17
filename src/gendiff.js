import _ from 'lodash';
import parseData from './parser.js';

const gendiff = (filepath1, filepath2) => {
  const data1 = parseData(filepath1);
  const data2 = parseData(filepath2);

  const buildDiff = (obj1, obj2) => {
    const keys = _.union(Object.keys(obj1), Object.keys(obj2));
    return keys.map((key) => {
      if (!(key in obj1)) {
        return { key, value: obj2[key], status: 'added' };
      }
      if (!(key in obj2)) {
        return { key, value: obj1[key], status: 'removed' };
      }
      if (obj1[key] !== obj2[key]) {
        if (
          typeof obj1[key] === 'object'
          && obj1[key] !== null
          && typeof obj2[key] === 'object'
          && obj2[key] !== null
        ) {
          return {
            key,
            children: buildDiff(obj1[key], obj2[key]),
            status: 'nested',
          };
        }
        return {
          key, value1: obj1[key], value2: obj2[key], status: 'changed',
        };
      }
      return { key, value: obj1[key], status: 'unchanged' };
    });
  };

  return buildDiff(data1, data2);
};
export default gendiff;
