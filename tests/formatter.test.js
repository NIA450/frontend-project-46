import genDiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';

const filepath1 = path.join(__dirname, '../data/file1.json');
const filepath2 = path.join(__dirname, '../data/file2.json');

describe('GenDiff', () => {
  test('should return correct plain format output', () => {
    const expected =
      "Property 'common.follow' was added with value: false\n" +
      "Property 'common.setting2' was removed\n" +
      "Property 'common.setting3' was updated. From true to null\n" +
      "Property 'common.setting4' was added with value: 'blah blah'";

    const result = genDiff(filepath1, filepath2, 'plain');
    expect(result).toBe(expected);
  });

  test('should return correct json format output', () => {
    const expected = JSON.stringify(
      [
        { key: 'common.follow', value: false, status: 'added' },
        { key: 'common.setting2', status: 'removed' },
        {
          key: 'common.setting3',
          value: { old: true, new: null },
          status: 'updated',
        },
        { key: 'common.setting4', value: 'blah blah', status: 'added' },
      ],
      null,
      2
    );

    const result = genDiff(filepath1, filepath2, 'json');
    expect(result).toBe(expected);
  });
});