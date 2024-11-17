import formatPlain from "./plain.js";
import formatStylish from "./stylish.js";

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
};

export default (formatName) => {
  const formatter = formatters[formatName] || formatters.stylish;
  return formatter;
};