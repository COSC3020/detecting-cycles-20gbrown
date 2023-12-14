//code.test.js
/*const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const graphGenerator = jsc.bless({
    generator: function(size) {
      const graph = {};
      const numNodes = jsc.integer(2, 10).generator(size); // Generate a random number of nodes
  
      // Create a connected circular graph
      for (let i = 0; i < numNodes; i++) {
        const currentNode = `Node${i}`;
        graph[currentNode] = [];
  
        // Connect each node to the next one in a circular manner
        const nextNode = `Node${(i + 1) % numNodes}`;
        graph[currentNode].push(nextNode);
      }
  
      // Add a few random edges to create variety
      for (const node in graph) {
        const numEdgesToAdd = jsc.integer(0, numNodes - 2).generator(size);
  
        for (let k = 0; k < numEdgesToAdd; k++) {
          let randomEdge;
          do {
            randomEdge = `Node${jsc.integer(0, numNodes - 1).generator(size)}`;
          } while (randomEdge === node || graph[node].includes(randomEdge));
  
          graph[node].push(randomEdge);
        }
      }
  
      // Make sure each node has at least one outgoing edge
      for (const node in graph) {
        if (graph[node].length === 0) {
          const nextNode = `Node${(parseInt(node.slice(4)) + 1) % numNodes}`;
          graph[node].push(nextNode);
        }
      }
  
      return graph;
    },
    shrink: jsc.shrink.noop,
  });

const test = jsc.forall(graphGenerator, function(graph) {
    const result = hasCycle(graph);
    
    const validateWithDFS = (currentNode, visited, parent) => {
        visited.add(currentNode);
      
        for (const neighbor of graph[currentNode]) {
          if (!visited.has(neighbor)) {
            if (validateWithDFS(neighbor, visited, currentNode)) {
              return true;
            }
          } else if (neighbor !== parent) {
            console.error(`Detected cycle: ${currentNode} -> ${neighbor} -> ... -> ${currentNode}`);
            return true;
          }
        }
      
        return false;
      };
  
    for (const node in graph) {
      const visitedNodes = new Set();
      if (!visitedNodes.has(node) && validateWithDFS(node, visitedNodes, null)) {
        if (!result) {
          console.error('Validation failed: DFS detected a cycle, but hasCycle returned false.');
          return false;
        }
      }
    }
  
    
    if (result && Object.keys(graph).length > 0) {
      console.error('Validation failed: DFS did not detect a cycle, but hasCycle returned true.');
      return false;
    }
  
    return true; 
  });

jsc.assert(test, { tests: 1000 });*/

//Inspired by JamesOzzyburn with help from ChatGPT
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Test Case 1: Graph with a cycle
const graph1 = [
    [1, 2],
    [],
    [3, 1],
    [0]
];
assert.strictEqual(hasCycle(graph1), true, 'Test Case 1 failed');

// Test Case 2: Acyclic graph (This test case doesn't workco)
var graph2 = [
    [1, 2],
    [],
    [1], 
    [3]
];
assert.strictEqual(hasCycle(graph2), false, 'Test Case 2 failed');

// Test Case 3: Graph with a cycle
const graph3 = [
    [1, 3],
    [2, 3],
    [3, 1],
    [4],
    []
];
assert.strictEqual(hasCycle(graph3), true, 'Test Case 3 failed');

// Test Case 4: Graph with a cycle
const graph4 = [
    [1, 2],
    [1, 3],
    [1, 4],
    [4, 1],
    [2, 3],
    [3, 4]
];
assert.strictEqual(hasCycle(graph4), true, 'Test Case 4 failed');


