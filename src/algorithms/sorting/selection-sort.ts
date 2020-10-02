/**
 * selectionSort
 * 
 * sort the array by repeatedly finding the mininum element in the array starting at 0
 * swap the minimum with the element at index 0
 * divide the array into sorted and unsorted sub array
 * start with the next unsorted sub array starting with index 1
 * repeat the swap process with minimum found until the sorted vs unsorted boundry reaches the end
 * 
 * @param arr 
 */

export const selectionSort = <T>(arr: T[]) => {
  for(let i = 0; i < arr.length - 1; i ++) {
    let minIndex = i;

    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[minIndex] > arr[j]) minIndex = j;
    }

    // swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// example usage
console.log(selectionSort([34, 12, 11, 8, 21, 23, 87, 35, 44]));
