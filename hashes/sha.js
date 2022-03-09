// it is a hashing techniques there are different method for its implementation

const CHAR_SIZE = 8;

function pad(str, bits) {
  let res = str;
  while (res.length % bits !== 0) {
    res = "0" + res;
  }
  return res;
}

// console.log(pad("001011", 8)); //00001011

function chunkify(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

// console.log(chunkify("bikramsboots", 3)); //[ 'bik', 'ram', 'sbo', 'ots' ]

function preProcess(message) {
  let m =
    message
      .split("")
      .map((e) => e.charCodeAt(0))
      .map((e) => e.toString(2))
      .map((e) => pad(e, 8))
      .join("") + "1";

  //   extend messages
  while (m.length % 512 !== 448) {
    m += "0";
  }

  let ml = (message.length * CHAR_SIZE).toString(2);
  ml = pad(ml, 8);
  ml = "0".repeat(64 - ml.length) + ml;

  return m + ml;
}

// console.log(preProcess("bikram")); // result: 01100010011010010110101101110010011000010110110110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000

function rotateLeft(str, turns) {
  return str.substr(turns) + str.substr(0, turns);
}
// console.log(rotateLeft("markib",5)); //bmarki

// now all these above function will be used to create the hashes

function SHA1 (message) {
    // main variables
    let H0 = 0x67452301
    let H1 = 0xEFCDAB89
    let H2 = 0x98BADCFE
    let H3 = 0x10325476
    let H4 = 0xC3D2E1F0
  
    // pre-process message and split into 512 bit chunks
    const bits = preProcess(message)
    const chunks = chunkify(bits, 512)
  
    chunks.forEach(function (chunk, i) {
      // break each chunk into 16 32-bit words
      const words = chunkify(chunk, 32)
  
      // extend 16 32-bit words to 80 32-bit words
      for (let i = 16; i < 80; i++) {
        const val = [words[i - 3], words[i - 8], words[i - 14], words[i - 16]]
          .map(e => parseInt(e, 2))
          .reduce((acc, curr) => curr ^ acc, 0)
        const bin = (val >>> 0).toString(2)
        const paddedBin = pad(bin, 32)
        const word = rotateLeft(paddedBin, 1)
        words.push(word)
      }
  
      // initialize variables for this chunk
      let [a, b, c, d, e] = [H0, H1, H2, H3, H4]
  
      for (let i = 0; i < 80; i++) {
        let f, k
        if (i < 20) {
          f = (b & c) | (~b & d)
          k = 0x5A827999
        } else if (i < 40) {
          f = b ^ c ^ d
          k = 0x6ED9EBA1
        } else if (i < 60) {
          f = (b & c) | (b & d) | (c & d)
          k = 0x8F1BBCDC
        } else {
          f = b ^ c ^ d
          k = 0xCA62C1D6
        }
        // make sure f is unsigned
        f >>>= 0
  
        const aRot = rotateLeft(pad(a.toString(2), 32), 5)
        const aInt = parseInt(aRot, 2) >>> 0
        const wordInt = parseInt(words[i], 2) >>> 0
        const t = aInt + f + e + k + wordInt
        e = d >>> 0
        d = c >>> 0
        const bRot = rotateLeft(pad(b.toString(2), 32), 30)
        c = parseInt(bRot, 2) >>> 0
        b = a >>> 0
        a = t >>> 0
      }
  
      // add values for this chunk to main hash variables (unsigned)
      H0 = (H0 + a) >>> 0
      H1 = (H1 + b) >>> 0
      H2 = (H2 + c) >>> 0
      H3 = (H3 + d) >>> 0
      H4 = (H4 + e) >>> 0
    })
  
    // combine hash values of main hash variables and return
    const HH = [H0, H1, H2, H3, H4]
      .map(e => e.toString(16))
      .map(e => pad(e, 8))
      .join('')
  
    return HH
  }
  
  //console.log(SHA1("Bikram"));
; //ec8cf81333fd26a94fbc812802442af522c6144b