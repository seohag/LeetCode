function numJewelsInStones(jewels: string, stones: string): number {
    let result = 0;

    for (const stone of stones) {
        if (jewels.includes(stone)) {
            result++;
        }
    }

    return result;
};
