class BloomFlters {
  constructor(size = 101) {
    this.size = size;
    this.data = this.getStorage(size);
  }

  add(item) {
    const indices = this.getStorage(item);
    for (let i = 0; i < indices.length; i += 1) {
      this.data.setBit(indices[i]);
    }
  }

  contains(item) {
    const indices = this.getIndices(item);
    for (let i = 0; i < indices.length; i += 1) {
      const index = indices[i];
      if (!this.data.getBit(index)) {
        return false;
      }
    }
    return true;
  }

  getIndices(item) {
    return [this.hashOne(item), this.hashTwo(item), this.hashThree(item)];
  }

  hashOne(value) {
    const stringVal = String(value);
    let hashVal = 0;
    for (let i = 0; i < stringVal.length; i += 1) {
      hashVal = hashVal + stringVal.charCodeAt(i) - 96;
    }
    hashVal &= hashVal;
    return Math.abs(hashVal % this.size);
  }

  hashTwo(value) {
    const stringValue = String(value);
    const PRIME_MULTIPLIER = 1801; // Random prime number
    let hashVal = 0;

    for (let i = 0; i < stringValue.length; i += 1) {
      hashVal += stringValue.charCodeAt(i) - 96;
      hashVal *= PRIME_MULTIPLIER;
    }

    return Math.abs(hashVal % this.size);
  }

  hashThree(value) {
    const stringValue = String(value);
    const PRIME_MULTIPLIER = 1801; // Random prime number
    const PRIME_ADDER = 2029; // Random prime number
    let hashVal = 0;

    for (let i = 0; i < stringValue.length; i += 1) {
      hashVal += stringValue.charCodeAt(i) - 96;
      hashVal *= PRIME_MULTIPLIER;
      hashVal += PRIME_ADDER;
    }
    // eslint-disable-next-line no-bitwise
    hashVal &= hashVal;
    return Math.abs(hashVal % this.size);
  }

  getStorage(size) {
    const data = new Array(size).fill(0);

    return {
      setBit(index) {
        data[index] = 1;
      },
      getBit(index) {
        return data[index];
      },
    };
  }
}

const res = new BloomFlters();
res.add("bikram");
res.add("bicky");
res.add("nwe dev");

console.log(res.contains("bikram"));
console.log(res.contains("a"));
