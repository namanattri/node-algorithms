/**
 * splitSearch
 * 
 * given sorted array of uniformaly distributed values, it's a improvement over binary search 
 * where partition position is selected close to either start or end index 
 * if the search is close to start or end element respectively
 * position formula:
 * pos = startIndex + ((search - arr[startIndex]) * (endIndex - startIndex) / (arr[endIndex] - arr[startIndex])) 
 * time complexity: If elements are uniformly distributed then O(loglogn) otherwise worst case it's O(n)
 * 
 * @param arr sorted haystack
 * @param startIndex of arr
 * @param endIndex of arr
 * @param search needle
 */

const splitSearch = (arr: number[], startIndex: number, endIndex: number, search: number): number => {
  
  // check if end >= start
  if(endIndex >= startIndex && search >= arr[startIndex] && search <= arr[endIndex]) {
    // find the mid index
    let pos = Math.floor(startIndex + ((search - arr[startIndex]) * (endIndex - startIndex) / (arr[endIndex] - arr[startIndex])));

    // check if middle element is the searched element
    if(arr[pos] === search) {
      return pos;
    } else if(search < arr[pos]) {
      // search in left half of the array
      return splitSearch(arr, startIndex, pos - 1, search);
    } else {
      // search in the right half of the array
      return splitSearch(arr, pos + 1, endIndex, search);
    }
  }

  return -1;

}

/**
 * interpolationSearch
 * 
 * @param arr sorted haystack
 * @param search needle
 */
export const interpolationSearch = (arr: number[], search: number): number => {
  return splitSearch(arr, 0, arr.length - 1, search);
}

// example usage
console.log(interpolationSearch([1, 2, 3, 4], 4)); // 3

// using generics
console.log(interpolationSearch([12, 21, 54, 55, 76], 54)); // 2

// using generics
console.log(interpolationSearch([10, 12, 13, 16, 18,  
  19, 20, 21, 22, 23,  
  24, 33, 35, 42, 47], 18)); // 4