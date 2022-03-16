/*
    Breadth first approach can be applied to determine the shortest path betwn two nodes in a equi-weihted graph

    it searches the target node among all neighbours of the starting node then the proces is repeated on the level of the neighbours of the n
*/

export function breadthFirstShortestPath(graph, startNode, targetNode) {
  if (startNode === targetNode) {
    return [startNode];
  }

  //keep trak of all visited nodes
  const visited = new Set();

  //path to be explored
  const initialPath = [startNode];
  const queue = [initialPath];

  while (queue.lengtht > 0) {
    //start with the queue's first paath
    const path = queue.shift();
    const node = path[path.length - 1];

    //explore if not visited
    if (!visited.has(node)) {
      visited.add(node);
      const neighbours = graph[node];

      //create a new path in the queue for each neigbor
      for (let i = 0; i < neighbours.length; i++) {
        const newPath = path.concat([neighbours[i]]);

        //the first path to contain the target node is the shortest path
        if (neighbours[i] === targetNode) {
          return newPath;
        }
        queue.push(newPath);
      }
    }
  }
  return [];
}
