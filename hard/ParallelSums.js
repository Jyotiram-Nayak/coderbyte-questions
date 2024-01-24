function ParallelSums(arr) {
    function compose(a, b) {
        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);
        
        if (a[0] <= b[0]) {
            return a.concat(b).join(',');
        } else {
            return b.concat(a).join(',');
        }
    }
  
    const combs = new Set();
    
    // Generate all combinations of length arr.length / 2
    function generateCombinations(currentIndex, currentCombination) {
        if (currentCombination.length === arr.length / 2) {
            combs.add([...currentCombination]);
            return;
        }
        
      for (let i = currentIndex; i < arr.length; i++) {
          currentCombination.push(arr[i]);
          generateCombinations(i + 1, currentCombination);
          currentCombination.pop();
      }
    }
    
    generateCombinations(0, []);
    
    for (const a of combs) {
        const aSum = a.reduce((sum, num) => sum + num, 0);
        const b = arr.filter((num) => !a.includes(num));
        const bSum = b.reduce((sum, num) => sum + num, 0);
        
        if (aSum === bSum) {
            return compose(a, b);
        }
    }
    
    return -1;
}

// Test cases
console.log(ParallelSums([16, 22, 35, 8, 20, 1, 21, 11])); // Output: 1,11,20,35,8,16,21,22
console.log(ParallelSums([1, 2, 3, 4])); // Output: 1,4,2,3
console.log(ParallelSums([1, 2, 1, 5])); // Output: -1