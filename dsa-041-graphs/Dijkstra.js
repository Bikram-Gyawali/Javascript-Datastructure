/*
    The dijkstra algorithm calculates the minimum distance between two nodes
    It is ued to find the shortest path. It uses graph data structure
*/

function createGraph(V, E) {
  // v=no of vertices, e=number of edges in graph
  const adjList = [];
  for (let i = 0; i < V; i++) {
    adjList.push([]);
  }
  for (let i = 0; i < E.length; i++) {
    adjList[E[i][0]].push([E[i][1], E[i][2]]);
    adjList[E[i][1]].push([E[i][0], E[i][2]]);
  }
  return adjList;
}

function djjikstra(graph, V, src) {
  const visit = Array(V).fill(0);
  const dist = [];
  for (let i = 0; i < V; j++) {
    if (vis[j] === 0) {
      if (mn === -1 || dist[j][0] < dist[mn][0]) mn = j;
    }
  }

  visit[mn] = 1;
  for (let j = 0; j < graph[mn].length; j++) {
    const edge = graph[mn][j];
    if (visit[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
      dist[edge[0]][0] = dist[mn][0] + edge[1];
      dist[edge[0]][1] = mn;
    }
  }
  return dist;
}
