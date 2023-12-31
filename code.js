//code.js
function hasCycle(graph) {
    function dfs(node, parent, componentStart, visited) {
        console.log(`Visiting node ${node}, parent ${parent}, componentStart ${componentStart}`);
        
        visited.add(node);
    
        for (let i = 0; i < graph[node].length; i++) {
            const neighbor = graph[node][i] - 1;
            console.log(`Checking neighbor ${neighbor + 1}`);
            
            if (!visited.has(neighbor)) {
                const nextComponentStart = (i === 0) ? node : componentStart;
                if (dfs(neighbor, node, nextComponentStart, visited)) {
                    return true;
                }
            } else if (visited.has(neighbor) && neighbor !== parent && neighbor !== componentStart && parent !== null) {
                console.log(`Cycle detected at node ${node}, neighbor ${neighbor}`);
                return true;
            }
        }
    
        return false;
    }
    

    for (let node = 0; node < graph.length; node++) {
        const visited = new Set(); // Reset visited set for each connected component
        if (!visited.has(node)) {
            if (dfs(node, null, node, visited)) {
                return true;
            }
        }
    }

    return false;
}












