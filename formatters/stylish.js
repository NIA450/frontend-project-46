const stylish = (diff) => {
  const iter = (data, depth) => {
    const indent = ' '.repeat(depth * 4); // Отступ для текущей глубины
    const shiftedIndent = ' '.repeat(depth * 4 - 2); // Отступ с учетом смещения влево

    const lines = data.map((item) => {
      switch (item.status) {
        case 'added':
          return `${shiftedIndent}+ ${item.key}: ${item.value}`;
        case 'removed':
          return `${shiftedIndent}- ${item.key}: ${item.value}`;
        case 'nested':
          return `${indent}${item.key}: {\n${iter(
            item.children,
            depth + 1
          )}\n${indent}}`;
        case 'changed':
          return [
            `${shiftedIndent}- ${item.key}: ${item.value1}`,
            `${shiftedIndent}+ ${item.key}: ${item.value2}`,
          ].join('\n');
        case 'unchanged':
          return `${indent}  ${item.key}: ${item.value}`;
        default:
          throw new Error(`Unknown status: ${item.status}`);
      }
    });
    return lines.join('\n');
  };

  return `{\n${iter(diff, 1)}\n}`;
};
export default stylish;
