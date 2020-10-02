export const bubbleSort = <T>(arr: T[]) => {
  for (let i = 0; i < arr.length - 1; i ++) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j+1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

export const bubbleSortOptimized = <T>(arr: T[]) => {
  for (let i = 0; i < arr.length - 1; i ++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j+1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if(!swapped) break;
  }

  return arr;
}

// example usage
console.log(bubbleSort([34, 12, 11, 8, 21, 23, 87, 35, 44]));
console.log(bubbleSort([34, 12, 11, 8, 21, 23, 87, 35, 44]));
