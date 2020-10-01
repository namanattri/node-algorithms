export const ternarySearch = <T>(arr: T[], startIndex: number, endIndex: number, search: T) => {
  if(startIndex <= endIndex) {
    const mid1 = Math.ceil(startIndex + (endIndex - startIndex) / 3);
    const mid2 = Math.ceil(mid1 + (endIndex - startIndex) / 3);

    if(arr[mid1] === search) return mid1;
    if(arr[mid2] === search) return mid2;

    if(search < arr[mid1]) return ternarySearch(arr, startIndex, mid1 - 1, search);
    if(search > arr[mid2]) return ternarySearch(arr, mid2 + 1, endIndex, search);

    return ternarySearch(arr, mid1 + 1, mid2 - 1, search);
  }

  return -1;
}

// example usage
const arr = [11, 12, 15, 19, 22, 21, 26, 34, 52, 67, 68, 69, 72, 77, 79, 80, 102, 123, 125];
console.log(ternarySearch(arr, 0, arr.length - 1, 4)); // -1
console.log(ternarySearch(arr, 0, arr.length - 1, 34)); // 7