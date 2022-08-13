const matrixGraph: number[][] = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrixGraph[0][1]);

const adjancencyList: { [key: string]: string[] } = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjancencyList.C);

class Graph<T> {
  adjancencyList: { [key: string]: Set<T> };
  constructor() {
    this.adjancencyList = {};
  }

  addVertext(vertext: string) {
    if (!this.adjancencyList[vertext]) this.adjancencyList[vertext] = new Set();
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.adjancencyList[vertex1]) this.addVertext(vertex1);
    if (!this.adjancencyList[vertex2]) this.addVertext(vertex2);
    // @ts-ignore
    this.adjancencyList[vertex1].add(vertex2);
    // @ts-ignore
    this.adjancencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return this.adjancencyList[vertex1].has(vertex2) && this.adjancencyList[vertex2].has(vertex1);
  }

  dispaly() {
    for (let vertex in this.adjancencyList) {
      console.log(vertex + "->" + [...this.adjancencyList[vertex]]);
    }
  }
}

const graph = new Graph<string>();
graph.addVertext("A");
graph.addVertext("B");
graph.addVertext("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.dispaly();

console.log({hasedge:graph.hasEdge("A","C")})
