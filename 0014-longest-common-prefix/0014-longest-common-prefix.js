/**
 * @param {string[]} strs
 * @return {string}
 */


function TrieNode(val) {
    this.val = val
    this.terminates = false
    this.children = {}
    
    this.addWord = function(word) {
        if (!word || word.length === 0) return null
        
        const firstChar = word[0]
        var child = this.getChild(firstChar)
        if (!child) {
            child = new TrieNode(firstChar)
            this.children[firstChar] = child
        }
        if (word.length > 1) {
            child.addWord(word.substring(1))
        }
    }

    this.getChild = function(char) {
        return this.children[char]
    }
} 

function Trie() {
    return new TrieNode(null)
}
var longestCommonPrefix = function(strs) {
    const trie = Trie()
    const emptyStringFound = strs.some(str => {
        const response = trie.addWord(str)
        return response === null
    })

    var longestPrefix = ""

    if (!emptyStringFound) {

        var trieNode = trie

        while (Object.keys(trieNode.children).length === 1) {
            trieNode = trieNode.children[Object.keys(trieNode.children)[0]]
            longestPrefix = longestPrefix + trieNode.val
        }
    }

    var shortestStringLength = 999
    strs.forEach(str => {
        if (str.length < shortestStringLength) shortestStringLength = str.length
    })

    return longestPrefix.substring(0, shortestStringLength)

};