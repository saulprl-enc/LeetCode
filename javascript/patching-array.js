/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = (nums, n) => {
  const patchableNums = [...nums];
  const rangeToCover = Array.from({ length: n }).fill(false);
  let numberOfPatches = 0;

  for (let i = 0; !rangeToCover.every((value) => value); i++) {
    if (i > 0 && !patchableNums.includes(i)) {
      patchableNums.push(i);
      numberOfPatches++;
    }

    const combinations = filterEmptyCombinations(
      recursiveCombinations([...patchableNums])
    );

    combinations.forEach((combination) => {
      const sum = addNumbers(combination);

      rangeToCover[sum - 1] = true;
    });
  }

  return numberOfPatches;
};

const nums = [1, 5, 10];
const n = 20;

/**
 * Function that calculates all of the possible combinations for the provided array of numbers
 * by looping through its elements.
 * @param {Array<number>} array
 * @returns {Array<Array<number>>}
 */
const loopingCombinations = (array) => {
  const result = [[]];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const currentLength = result.length;

    for (let j = 0; j < currentLength; j++) {
      const currentCombination = result[j];

      const newCombination = currentCombination.concat(currentItem);

      result.push(newCombination);
    }
  }

  return result;
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
