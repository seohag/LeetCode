function numJewelsInStones(jewels: string, stones: string): number {
    let result = 0;
    const jewelSet = new Set(jewels);

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            result += 1;
        }
    }
    
    return result;
};
