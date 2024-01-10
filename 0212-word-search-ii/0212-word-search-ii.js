var TrieNode = function(val) {
    this.val = val;
    this.children = new Map();
    this.isWord = false;
}

TrieNode.prototype.getChildren = function() {
    return this.children;
}

var Trie = function() {
    this.root = new TrieNode();
}

Trie.prototype.addWord = function(word) {
    let node = this.root;

    word.split('').forEach((char, index) => {
        if (!node.children.has(char)) {
            const newNode = new TrieNode(char); 
            node.children.set(char, newNode);
        }
        node = node.children.get(char);

        if (index === word.length - 1) 
            node.isWord = true;
    });
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();
    words.forEach(word => trie.addWord(word));
    const result = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const visited = Array.from({length: board.length});
            visited.forEach(
                (_, index) => visited[index] = Array.from({length: board[index].length}, () => false)
            );

            dfs(board, i, j, visited, result, trie.root, '');
        }
    }
    // const h = trie.root.children.get('h');

    // for (const key in h) {
    //     if (key === 'children') {
    //         const children = h[key];
    //         const newnode = children.get('k');
    //         for (const key2 in newnode) {
    //             if (key2 === 'children') {
    //                 const children = newnode[key];
    //                 console.log(children.get('l'));
    //             }
    //         }
    //     }
    // }
    return Array.from(result);
};

const dfs = (board, i, j, visited, result, node, word) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || !node.children.has(board[i][j])) {
        return;
    } 

    word = `${word}${board[i][j]}`;
    node = node.children.get(board[i][j]);
    if (node.isWord) {
        result.add(word);
    }

    visited[i][j] = true;
    dfs(board, i - 1, j, visited, result, node, word)
    dfs(board, i + 1, j, visited, result, node, word)
    dfs(board, i, j + 1, visited, result, node, word)
    dfs(board, i, j - 1, visited, result, node, word)
    visited[i][j] = false;
};
