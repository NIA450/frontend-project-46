const formatPlain = (diff) => {
  const iter = (node, path) => {
    return node
      .flatMap(({ key, value, status }) => {
        const newPath = path ? `${path}.${key}` : key;
        switch (status) {
          case "added":
            return `Property '${newPath}' was added with value: ${formatValue(
              value
            )}`;
          case "removed":
            return `Property '${newPath}' was removed`;
          case "updated":
            return `Property '${newPath}' was updated. From ${formatValue(
              value.old
            )} to ${formatValue(value.new)}`;
          default:
            return [];
        }
      })
      .join("\n");
  };

  return iter(diff, "");
};

const formatValue = (value) => {
  if (value === null) return "null";
  if (typeof value === "object") return "[complex value]";
  return `'${value}'`;
};

export default formatPlain;
