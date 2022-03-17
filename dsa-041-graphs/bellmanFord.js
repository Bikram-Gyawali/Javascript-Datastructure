/*
    the bell man ford algorithm is an algo that computes shortest paths frim a singl source vertex to all of th othr ereuves in weeieghred digrph. It also detects negative weighth cyclee
*/

/**
 *
 * @param graph Graph in the format (u, v, w) where
 *  the edge is from vertex u to v. And weight
 *  of the edge is w.
 * @param V Number of vertices in graph
 * @param E Number of edges in graph
 * @param src Starting node
 * @param dest Destination node
 * @returns Shortest distance from source to destination
 */

function BellmanFord(graph, V, E, src, dest) {
  const distance = Array(V).fill(Infinity);
  distance[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    for (let j = 0; j < E; j++) {
      if (distance[graph[j][0]] + graph[j][2] < distance[graph[j][1]]) {
        distance[graph[j][1]] = distance[graph[j][0]] + graph[j][2];
      }
    }
  }
  // check for negative-weight cycles.
  for (let i = 0; i < E; i++) {
    const x = graph[i][0];
    const y = graph[i][1];
    const weight = graph[i][2];
    if (dis[x] !== Infinity && dis[x] + weight < dis[y]) {
      return null;
    }
  }
  for (let i = 0; i < V; i++) {
    if (i === dest) return dis[i];
  }
}
