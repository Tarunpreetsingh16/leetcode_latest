function TrieNode(val) {
    this.val = val;
    this.children = new Map();
    this.wordEnd = false;

    this.addWord = function(word) {
        if (!word || word.length === 0) return;

        const firstChar = word[0];
        let nextCharNode = this.getNextCharNode(firstChar);
        
        if (!nextCharNode) {
            const newNode = new TrieNode(firstChar);
            this.children.set(firstChar, newNode);
            nextCharNode = newNode;
        }
        nextCharNode.addWord(word.substring(1));
    }

    this.getNextCharNode = function(char) {
        return this.children.get(char);
    }
}


function Trie() {
    return new TrieNode(null);
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const root = new Trie();
    let minLength = Infinity;
    strs.forEach(str => {
        root.addWord(str)
        minLength = Math.min(minLength, str.length);
    });

    let result = "";
    let size = root.children.size;
    let node = root;
    while (size === 1 && minLength > 0) {
        const keys = node.children.keys();
        const nextChar = keys.next().value;
        node = node.children.get(nextChar);
        result += nextChar;
        size = node.children.size;
        minLength--;
    }

    return result;
};
