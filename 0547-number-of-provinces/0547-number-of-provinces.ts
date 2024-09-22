function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinceCount = 0;
    
    const dfs = (city: number) => {
        visited[city] = true;
        
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinceCount++;
        }
    }
    
    return provinceCount;
};