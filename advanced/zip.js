function zip(...arrays) {
    const maxLength = Math.max(...arrays.map(array => array.length));
    return Array.from({ length: maxLength }).map((_, i) => {
      return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
    });
  }


//   The Zip function is a JavaScript function that matches each passed array of elements to another array element and is used to combine multiple arrays into a single array of tuples. The resulting array will contain the corresponding elements from each array. Often, this functionality is used when working with data from multiple sources that need to be merged or correlated in some way./