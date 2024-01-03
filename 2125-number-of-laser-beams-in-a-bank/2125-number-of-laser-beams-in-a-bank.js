/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prevCellsCount = 0, total = 0;
    for (let i = 0; i < bank.length; i++) {
        const row = bank[i];
        let cellsInCurrentRow = 0;
        for (let j = 0; j < row.length; j++) {
            const cell = row.charAt(j);
            if (cell === '1') {
                cellsInCurrentRow++;
            }
        }
        if (cellsInCurrentRow > 0) {
            total += (cellsInCurrentRow * prevCellsCount);
            prevCellsCount = cellsInCurrentRow;
        }
    }
    return total;
};