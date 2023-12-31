/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array(9).fill(null).map(() => new Set());
    const columns = Array(9).fill(null).map(() => new Set());
    const boxes = Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currElement = board[i][j];

            if (currElement === '.') {
                continue;
            }
            const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
            
            if (rows[i].has(currElement) || columns[j].has(currElement) || boxes[boxIndex].has(currElement)) {
                return false;
            }

            rows[i].add(currElement);
            columns[j].add(currElement);
            boxes[boxIndex].add(currElement);
        }
    }
    return true;
};