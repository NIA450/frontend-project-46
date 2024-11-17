import formatPlain from './plain.js';
import formatStylish from './stylish.js';
import formatJson from './json.js'; // Импорт нового форматера

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson, // Добавление JSON форматера
};

export default (formatName) => {
  const formatter = formatters[formatName] || formatters.stylish;
  return formatter;
};