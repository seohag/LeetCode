/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const stringCounts = {};
  let sum = 0;
  let oddPresent = false;

  for (let i = 0; i < s.length; i++) {
    stringCounts[s[i]] = (stringCounts[s[i]] || 0) + 1;
  }

  for (const character in stringCounts) {
    if (stringCounts[character] % 2 === 0) {
      sum += stringCounts[character];
    } else {
      oddPresent = true;
      sum += stringCounts[character] - 1;
    }
  }

  if (oddPresent) {
      sum += 1;
  }

  return sum;
};
