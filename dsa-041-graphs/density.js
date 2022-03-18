/*
    the density of a network is a measure of how many edges exist proportionoal to how many edges wouuld exist in a complete network (where all possible edges)
*/

function density(numberOfNodes, numberOfEdges, isDirected = false) {
  const multi = isDirected ? 1 : 2;
  return (multi * numberOfEdges) / (numberOfNodes * (numberOfNodes - 1));
}
