//PAIR PROGRAMMING - Alexander && Sam

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const transpose = letters[0].map((val, colI) =>
    letters.map((row) => row[colI])
  );
  let verticalJoin = transpose.map((ls) => ls.join(""));

  for (let l of verticalJoin) {
    console.log(word);
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;

// const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK')
