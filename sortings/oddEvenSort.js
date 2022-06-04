/**
 * odd-even sort or transportation sort is a relatively simple sorting algorithm , developed originally for use on parallel processors with local interconnections . is is a comparision sort sort related to buble sort, with which it shares many characterisstics
 * */

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const oddEvenSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    for(let i=0;i<arr.length-1;i+=2){
        if(arr[i]>arr[i+1]){
            swap(arr,i,i+1){
                swap(arr,i,i+1);
                sorted=false;
            }
        }
    }
  }
  return arr;
};
