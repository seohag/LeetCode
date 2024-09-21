function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    
    if (m * n !== r * c) {
        return mat;
    }
    
    const flat: number[] = [];
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(mat[i][j]);
        }
    }
    
    const reshaped: number[][] = [];
    
    for (let i = 0; i < r; i++) {
        reshaped.push(flat.slice(i * c, (i + 1) * c));
    }
    
    return reshaped;
};
