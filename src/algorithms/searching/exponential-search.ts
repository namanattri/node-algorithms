/**
 * exponentialSearch
 * 
 * 1. Find a range in array where element is present as:
 * start with index 0 compare the element with search return 0
 * now start with index 1
 * while index < endIndex and arr[index] <= x increment index by multiplying by 2
 * we get the range as startIndex = index/2 and endIndex = min(index, arr.length) 
 * because if either element > search is found or index has exceed the array size then we need last index which has values <= search
 * to create a safe range at the end of the array
 * 2. Do binary search on the found range
 * Time complexity: O(logn)
 * 
 * @param arr 
 * @param search 
 */
export const exponentialSearch = <T>(arr: T[], search: T) => {
  let index = 0;

  if(arr[index] == search) {
    return index;
  }

  index += 1;
  while(index < arr.length && arr[index] <= search)  {
    index *= 2
  }

  return binarySearch(arr, index/2, Math.min(index, arr.length), search);
}

const binarySearch = <T>(arr: T[], startIndex: number, endIndex: number, search: T) => {
  if(startIndex <= endIndex) {
    const mid = Math.ceil(startIndex + (endIndex - startIndex) / 2);

    if(arr[mid] === search) {
      return mid;
    } else if(search < arr[mid]) {
      return binarySearch(arr, startIndex, mid - 1, search);
    } else {
      return binarySearch(arr, mid + 1, endIndex, search);
    }
  }

  return -1;
}

// example usage
console.log(exponentialSearch([1, 2, 3, 4], 4)); // 3
console.log(exponentialSearch([1, "books", 3, "cars"], 4)); // -1

// using generics
console.log(exponentialSearch<number>([12, 21, 54, 55, 76], 54)); // 2
console.log(exponentialSearch<string>(["books", "cards", "clubs", "dairy"], "yolk")); // -1
console.log(exponentialSearch<string>(["books", "cards", "clubs", "dairy"], "cards")); // 1