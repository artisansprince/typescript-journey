// Basic Algorithms

// Linear Search
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }
  
  // Binary Search
  function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
  
  // Bubble Sort
  function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        }
      }
    }
    return arr;
  }
  
  // Contoh penggunaan
  let numbers = [3, 5, 1, 4, 2];
  console.log("Bubble Sort:", bubbleSort(numbers)); // Output: [1, 2, 3, 4, 5]
  console.log("Linear Search:", linearSearch(numbers, 4)); // Output: 3
  console.log("Binary Search:", binarySearch(numbers, 4)); // Output: 3
  