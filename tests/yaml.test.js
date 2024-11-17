import gendiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const getFixturePath = (filename) => path.join(dirname, '..', 'data', filename);
const expectedPath = getFixturePath('expectedYamlResults.txt');
const expected = fs.readFileSync(expectedPath, 'utf-8');

describe('gendiff with YAML files', () => {
  const file1 = path.join(dirname, '../data/file1.yml');
  const file2 = path.join(dirname, '../data/file2.yml');

  test('compare YAML files with differences', () => {
    expect(gendiff(file1, file2)).toEqual(expected);
  });
});
