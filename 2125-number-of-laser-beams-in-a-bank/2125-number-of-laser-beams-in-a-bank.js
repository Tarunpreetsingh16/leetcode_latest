/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let prevCellsCount = 0, total = 0;

    // go through the array of strings and process each string for number of securty cameras
    for (let i = 0; i < bank.length; i++) {
        const row = bank[i];
        let cellsInCurrentRow = 0;
        for (let j = 0; j < row.length; j++) {
            const cell = row.charAt(j);

            // update the number of cameras in the current row
            if (cell === '1') {
                cellsInCurrentRow++;
            }
        }
        // only calculate the beams if there were any cameras in the current row
        if (cellsInCurrentRow > 0) {
            // get current total of beams by multiplying current and prev camera count (cameras in row r1 and r2, where r1 comes before r2 and there was no row between those two rows with cameras.)
            total += (cellsInCurrentRow * prevCellsCount);
            prevCellsCount = cellsInCurrentRow;
        }
    }
    return total;
};