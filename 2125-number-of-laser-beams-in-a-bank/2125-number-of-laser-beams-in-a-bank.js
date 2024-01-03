/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prevCellsCount = 0, total = 0;
    bank.forEach(row => {
        let cellsInCurrentRow = 0;
        for (let i = 0; i < row.length; i++) {
            const cell = row.charAt(i);
            if (cell === '1') {
                cellsInCurrentRow++;
            }
        }
        if (cellsInCurrentRow > 0) {
            total += (cellsInCurrentRow * prevCellsCount);
            prevCellsCount = cellsInCurrentRow;
        }
    });
    return total;
};