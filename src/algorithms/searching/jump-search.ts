/**
 * jumpSearch
 * 
 * Find optimal jump step as sq. root of array length and take it as a stating point by setting currentStep as optimal jump step
 * while element at currentStep in the array is less than the search, increment currentStep by optimal jump step
 * if current step becomes greater than array length then:
 *   clearly element doesn't exist in the array
 * if at any step search becomes less than element at currentStep then:
 *   jump to previous step and perform linear search until either search is found or the iteration has reached to the current step again
 * Time complexity: between O(n) and O(logn) = O(n^(1/2)) where n^(1/2) is the optimal jump step
 * 
 * @param arr Haystack
 * @param search needle
 */

export const jumpSearch = <T>(arr: T[], search: T) => {
  let arrSize = arr.length;
  let optimalJumpStep = Math.floor(Math.sqrt(arrSize));
  let currentStep = optimalJumpStep;

  while(arr[currentStep] < search) {
    currentStep += optimalJumpStep;
  }

  if(currentStep > arrSize) {
    return -1;
  }

  if(arr[currentStep] === search) {
    return currentStep;
  }

  // if start is less than arrSize jump back by optimalJumpStep and perform linear search

  for(let index = currentStep - optimalJumpStep; index < currentStep; index++) {
    if(search === arr[index]) {
      return index;
    }
  }

  return -1;
}

// example usage
console.log(jumpSearch([1, 2, 3, 4], 4)); // 3
console.log(jumpSearch([1, "books", 3, "cars"], 4)); // -1

// using generics
console.log(jumpSearch<number>([12, 21, 54, 55, 76], 54)); // 2
console.log(jumpSearch<number>([1, 2, 4, 4, 7, 8, 12, 13, 19, 21, 23, 25, 30, 32, 35, 37, 54, 55, 76], 54));
console.log(jumpSearch<number>([1, 2, 4, 4, 7, 8, 12, 13, 19, 21, 23, 25, 30, 32, 35, 37, 54, 55, 76], 4));
console.log(jumpSearch<string>(["books", "cards", "clubs", "dairy"], "yolk")); // -1
console.log(jumpSearch<string>(["books", "cards", "clubs", "dairy"], "cards")); // 1