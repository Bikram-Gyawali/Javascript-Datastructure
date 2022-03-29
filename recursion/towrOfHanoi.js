function towerOfHanoi(n, fromPeg, toPeg, auxPeg) {
  //if only 1 disk make that move and return
  if (n == 1) {
    console.log("Move disk 1 from " + fromPeg + " to " + toPeg);
  }

  //   move topp n-1 disk from A to B using C as a auxilary peg
  towerOfHanoi(n - 1, fromPeg, auxPeg, toPeg);

  // move the remaining disk from A to C
  console.log(`Move disk ${n} form peg ${fromPeg} to peg ${toPeg}`);

  //   Move n-1 disks from B to C using A as auxilary
  towerOfHanoi(n - 1, auxPeg, toPeg, fromPeg);
}

towerOfHanoi(3, "A", "B", "C");
