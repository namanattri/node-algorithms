/**
 * binarySearch
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

const binarySearch = <T>(arr: T[], startIndex: number, endIndex: number, search: T): number => {
  
  // check if end >= start
  if(endIndex >= startIndex) {
    // find the mid index
    let midIndex = Math.ceil(startIndex + (endIndex - startIndex) / 2);

    // check if middle element is the searched element
    if(arr[midIndex] === search) {
      return midIndex;
    } else if(search < arr[midIndex]) {
      // search in left half of the array
      return binarySearch(arr, startIndex, midIndex - 1, search);
    } else {
      // search in the right half of the array
      return binarySearch(arr, midIndex + 1, endIndex, search);
    }
  }

  return -1;

}

// example usage
const arr1 = [1, 2, 3, 4];
console.log(binarySearch(arr1, 0, arr1.length - 1, 4)); // 3

const arr2 = [1, "books", 3, "cars"];
console.log(binarySearch(arr2, 0, arr2.length - 1, 4)); // -1

// using generics
const arr3 = [12, 21, 54, 55, 76];
console.log(binarySearch<number>(arr3, 0, arr3.length - 1, 54)); // 2
const arr4 = ["books", "cards", "clubs", "dairy"];
console.log(binarySearch<string>(arr4, 0, arr4.length - 1, "yolk")); // -1
console.log(binarySearch<string>(arr4, 0, arr4.length - 1, "cards")); // 1