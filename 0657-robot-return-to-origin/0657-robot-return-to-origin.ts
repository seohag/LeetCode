function judgeCircle(moves: string): boolean {
    let x = 0;
    let y = 0;
    
    for (const move of moves) {
        if (move === "R") {
            x += 1;
        } else if (move === "L") {
            x -= 1;
        } else if (move === "U") {
            y += 1;
        } else if (move === "D") {
            y -= 1;
        }
    }
    
    return x === 0 && y === 0;
};
