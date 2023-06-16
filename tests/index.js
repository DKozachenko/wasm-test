import assert from "assert";
import { getPrimeDump, getPrimeSmart, sortArray } from "../build/release/release.js";

assert.strictEqual(getPrimeDump([1, 1, 1]), -1);
assert.strictEqual(getPrimeDump([0, 1, 0]), -1);
assert.strictEqual(getPrimeDump([0, 1, 2]), 2);
assert.strictEqual(getPrimeDump([2, 0]), 2);
assert.strictEqual(getPrimeDump([]), -1);

console.log("Ok");

assert.strictEqual(getPrimeSmart([1, 1, 1]), -1);
assert.strictEqual(getPrimeSmart([0, 1, 0]), -1);
assert.strictEqual(getPrimeSmart([0, 1, 2]), 2);
assert.strictEqual(getPrimeSmart([2, 0]), 2);
assert.strictEqual(getPrimeSmart([]), -1);

console.log("Ok");

assert.deepStrictEqual(sortArray([1, 1, 1]), [1, 1, 1]);
assert.deepStrictEqual(sortArray([0, 1, 0]), [0, 0, 1]);
assert.deepStrictEqual(sortArray([0, 1, 2]), [0, 1, 2]);
assert.deepStrictEqual(sortArray([2, 0]), [0, 2]);
assert.deepStrictEqual(sortArray([]), []);

console.log("Ok");