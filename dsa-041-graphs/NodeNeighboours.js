class Graph {
  constructor() {
    this.edges = [];
  }

  addEdge(node1, node2) {
    this.edges.push({
      node1,
      node2,
    });
  }

  nodeNeighbours(node) {
    const neighbors = new Set();
    for (const edge of this.edges) {
      //   check if they have an dege between them and if the neighbor is snot already in the neighbours array
      if (edge.node1 === node && !neighbors.has(edge.node2)) {
        neighbors.add(edge.node2);
      } else if (edge.node2 === node && node && !neighbors.has(edge.node1)) {
        neighbors.add(edge.node1);
      }
    }
    return neighbors;
  }
}

// const graph = new Graph()
// graph.addEdge(1, 2)
// graph.addEdge(2, 3)
// graph.addEdge(3, 5)
// graph.addEdge(1, 5)
// graph.nodeNeighbors(1)
