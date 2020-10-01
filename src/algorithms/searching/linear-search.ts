/**
 * linearSearch
 * 
 * Start with the first element in the array
 * Compare x with each element
 * if x match an element return index
 * else return -1
 * Time complexity: O(n)
 * 
 * @param arr Haystack
 * @param search needle
 */

export const linearSearch = <T>(arr: T[], search: T) => {
  for(let index in arr) {
    if(search === arr[index]) {
      return index;
    }
  }

  return -1;
}

// example usage

console.log(linearSearch([1, 2, 3, 4], 4)); // 3
console.log(linearSearch([1, "books", 3, "cars"], 4)); // -1

// using generics
console.log(linearSearch<number>([12, 54, 21, 55, 76], 54)); // 1
console.log(linearSearch<string>(["cards", "books", "clubs", "dairy"], "yolk")); // -1
console.log(linearSearch<string>(["cards", "books", "clubs", "dairy"], "cards")); // 0