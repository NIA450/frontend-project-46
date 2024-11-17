import { strict as assert } from "assert";
import genDiff from "../src/gendiff.js";

const filepath1 = "filepath1.json";
const filepath2 = "filepath2.json";

describe("GenDiff", () => {
  it("should return correct plain format output", () => {
    const expected =
      `Property 'common.follow' was added with value: false\n` +
      `Property 'common.setting2' was removed\n` +
      `Property 'common.setting3' was updated. From true to null\n` +
      `Property 'common.setting4' was added with value: 'blah blah'`;
    const result = genDiff(filepath1, filepath2, "plain");
    assert.equal(result, expected);
  });
});