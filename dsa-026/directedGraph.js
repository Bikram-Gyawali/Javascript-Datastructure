// Directed graphs are graphs that do have a direction between vertices. Each edge in a
// directed graph goes from one vertex to another,

function DirectedGraph() {
  this.edges = {};
}
DirectedGraph.prototype.addVertex = (vertex) => {
  this.edges[vertex] = {};
};

DirectedGraph.prototype.addEdge = (originVertex, destVertex, weight) => {
  if (weigth === undefined) {
    weight = 0;
  }
  this.edges[originVertex][destVertex] = weight;
};

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);

// code block to remove edge
DirectedGraph.prototype.removeEdge=(originVertex,destVertex){
    if(this.edges[originVertex]&&this.edges[originVertex][destVertex]!=undefined){
        delete this.edges[originVertex][destVertex]
    }
}

DirectedGraph.prototype.removeEdge=(vertex)=>{
    for(var adjacentVertex in this.edges[vertex]){
        this.removeEdge(adjacentVertex,vertex)
    }
    delete this.edges[vertex]
}