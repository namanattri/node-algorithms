/**
 * splitSearch
 * 
 * compare search with the middle element of the array
 * if matches return the middle index
 * else check if search is less than middle element then recursively search in the left half of the array
 * else search in the right half of the array
 * time complexity: T(n) = T(n/2) + c or O(logn)
 * 
 * @param arr sorted haystack
 * @param startIndex of arr
 * @param endIndex of arr
 * @param search needle
 */

const splitSearch = <T>(arr: T[], startIndex: number, endIndex: number, search: T): number => {
  
  // check if end >= start
  if(endIndex >= startIndex) {
    // find the mid index
    let midIndex = Math.ceil(startIndex + (endIndex - startIndex) / 2);

    // check if middle element is the searched element
    if(arr[midIndex] === search) {
      return midIndex;
    } else if(search < arr[midIndex]) {
      // search in left half of the array
      return splitSearch(arr, startIndex, midIndex - 1, search);
    } else {
      // search in the right half of the array
      return splitSearch(arr, midIndex + 1, endIndex, search);
    }
  }

  return -1;

}

/**
 * binarySearch
 * 
 * @param arr sorted haystack
 * @param search needle
 */
export const binarySearch = <T>(arr: T[], search: T): number => {
  return splitSearch(arr, 0, arr.length - 1, search);
}

// example usage
console.log(binarySearch([1, 2, 3, 4], 4)); // 3
console.log(binarySearch([1, "books", 3, "cars"], 4)); // -1

// using generics
console.log(binarySearch<number>([12, 21, 54, 55, 76], 54)); // 1
console.log(binarySearch<string>(["books", "cards", "clubs", "dairy"], "yolk")); // -1
console.log(binarySearch<string>(["books", "cards", "clubs", "dairy"], "cards")); // 0