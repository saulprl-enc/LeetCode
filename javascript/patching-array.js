const nums = [1, 5, 10];
const n = 20;

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = (nums, n) => {
  const patchableNums = [...nums];
  const appliedPatches = [];
  let patch = 1;
  let i = 0;

  while (patch <= n) {
    if (i < patchableNums.length && patchableNums[i] <= patch) {
      patch += patchableNums[i];
      i++;
    } else {
      appliedPatches.push(patch);
      patch += patch;
    }
  }

  // console.log(appliedPatches);

  return appliedPatches.length;
};

/**
 * Function that calculates all of the possible combinations for the provided array of numbers
 * by iterating through it recursively.
 * @param {Array<number>} array
 * @returns {Array<Array<number>>}
 */
const recursiveCombinations = (array) => {
  if (array.length === 0) {
    return [[]];
  }

  const first = array.shift();

  const remainingCombinations = recursiveCombinations(array);

  const combinedCombinations = remainingCombinations.map((combo) => [
    first,
    ...combo,
  ]);

  const result = [...remainingCombinations, ...combinedCombinations];

  return result;
};

/**
 * Function that filters out the empty combination.
 * @param {Array<Array<number>>} combinations
 * @returns {Array<Array<number>>}
 */
const filterEmptyCombinations = (combinations) =>
  combinations.filter((combination) => combination.length > 0);

/**
 * Function that adds up all of the numbers in the array.
 * @param {Array<number>} array
 */
const addNumbers = (array) => array.reduce((sum, current) => sum + current, 0);

console.log(minPatches(nums, n));
