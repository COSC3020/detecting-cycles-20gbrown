[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12887107&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer

The worse-case big $\Theta$ complexity of the 'hasCycle' is $O(V + E)$, where $V$ is the number of vertices or nodes and $E$ is the number of edges for a given graph. 

The outer loop iterates over all nodes in the graph, in the worst case it makes $V$ iterations. For reach node in the outer loop, the DFS function is called. So each time the function is initializes a 'visited' set and sets the 'componentStart' varible, it takes constant time. The DFS traversal in the worst case, visits each node and each edge, which would give a time complexity of $O(V + E)$. The cycle detection in DFS takes constant time. So the outer loop has a complexity of $O(V)$ meaning the DFS function has a worst case time complexity of $O(V + E)$. 
