/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    const directX = [-1, 1, 0, 0];
    const directY = [0, 0, -1, 1]; 
    const row = grid.length;
    const col = grid[0].length;
    const visited = Array.from({length: row}, () => Array(col).fill(false));
    let result = 0;
    
    function checkRange(x, y) {
        if (x >= 0 && x < row && y >= 0 && y < col) {
            return true;
        } else {
            return false;
        }
    }
    
    
    function dfs(x, y) {
        for(let i = 0; i < 4; i++) {
            const nx = x + directX[i];
            const ny = y + directY[i];
            
            if(checkRange(nx, ny)){
                if(grid[nx][ny] && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    dfs(nx, ny);
                } else if(!grid[nx][ny]){
                    result++;
                }
            } else{
                result++;
            }
        }
    }
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] && !visited[i][j]) {
                visited[i][j] = true;
                dfs(i, j);
            }
        }
    }
    
    return result;
};
