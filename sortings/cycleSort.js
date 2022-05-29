/**
 * cycle sort is an inplace instable sorting algorithm a comparison sort that is theoretically optimal in terms of the total number of writes to the original array inilike any other in place sorting agorithm . It is bsed on the idea that the permutation to be sorted can be factored into cycles , which acan individually be rotated to give a sorted result .
 * */

function cycleSort(list) {
  for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
    let value = list[cycleStart];
    let position = cycleStart;

    //search position
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < value) {
        position++;
      }
    }

    /// it it is the same continue
    if (position === cycleStart) {
      continue;
    }
    while (value === list[position]) {
      position++;
    }

    const oldValue = list[position];
    list[position] = value;
    value = oldValue;

    //rotate others
    while (position !== cycleStart) {
      position = cycleStart;
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < value) {
          position++;
        }
      }

      while ((value = list[position])) {
        position++;
      }
      const oldValueCycle = list[position];
      list[position] = value;
      value = oldValueCycle;
    }
  }
  return list;
}



console.log(cycleSort([4,1,4,3,7,13,10,5]))