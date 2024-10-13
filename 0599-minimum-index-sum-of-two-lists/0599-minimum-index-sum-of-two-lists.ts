function findRestaurant(list1: string[], list2: string[]): string[] {
    const indexMap = new Map<string, number>();
    
    for (let i = 0; i < list1.length; i++) {
        indexMap.set(list1[i], i);
    }
    
    let minSum = Infinity;
    
    const result: string[] = [];
    
    for (let j = 0; j < list2.length; j++) {
        const str = list2[j];
        
        if (indexMap.has(str)) {
            const i = indexMap.get(str)!;
            const sum = i + j;
            
            if (sum < minSum) {
                minSum = sum;
                result.length = 0;
                result.push(str);
            } else if (sum === minSum) {
                result.push(str);
            }
        }
    }
    
    return result;
};
