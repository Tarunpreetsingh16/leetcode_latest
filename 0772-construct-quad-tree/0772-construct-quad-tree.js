/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    return generateQuadTree(0, 0, grid.length, grid);
};

/**
* This method will generate a quad tree.
* @param i row index of a grid
* @param j column index of a grid
* @param length length of a grid
* @param grid grid itself
* @returns root of the quad tree
*/
const generateQuadTree = (row, column, length, grid) => {
    if (length === 1) {
        return new Node(grid[row][column], true, null, null, null, null);
    }

    const elements = getUniqueElementsInGrid(row, column, length, grid);

    const node = new Node(elements.values().next().value, true, null, null, null, null);
    if (elements.size > 1) {
        const newLength = length / 2;
        node.topLeft = generateQuadTree(row, column, newLength, grid);
        node.topRight = generateQuadTree(row, column + newLength, newLength, grid);
        node.bottomLeft = generateQuadTree(row + newLength, column, newLength, grid);
        node.bottomRight = generateQuadTree(row + newLength, column + newLength, newLength, grid);
        node.isLeaf = false;
    }
    return node;
};

/**
* This method will get the unique elements in grid
* @param i row index of a grid
* @param j column index of a grid
* @param length length of a grid
* @param grid grid which needs to be checked for unique elements
*/
const getUniqueElementsInGrid = (row, column, length, grid) => {
    const uniqueElements = new Set();
    for (let i = row; i < row + length; i++) {
        for (let j = column; j < column + length; j++) {
            uniqueElements.add(grid[i][j]);
        }
    }

    return uniqueElements;
};