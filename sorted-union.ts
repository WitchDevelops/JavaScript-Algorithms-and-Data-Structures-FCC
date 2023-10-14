function uniteUnique(...arr: number[][]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (!result.includes(arr[i][j])) {
          result.push(arr[i][j]);
        }
      }
    }
    
    console.log(result);
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  