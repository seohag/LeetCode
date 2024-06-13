/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    const sortedS = s.split("").sort();
    const sortedT = t.split("").sort();
    
    for (let i = 0; i < sortedT.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return sortedT[i];
        }
    }
};
