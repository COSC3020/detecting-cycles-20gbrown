//code.test.js
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

 //changed to true
// Test Case 2: Acyclic graph
var graph2 = [
    [1, 2],
    [3],
    [1, 3], 
    [3]
];
assert.strictEqual(hasCycle(graph2), true, 'Test Case 2 failed');

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

//added for false test case
// Test Case 5: Acyclic graph
const graph5 = [
  [1, 2],
  [],
  [3],
  [4],
  []
];
assert.strictEqual(hasCycle(graph5), false, 'Test Case 5 failed');



