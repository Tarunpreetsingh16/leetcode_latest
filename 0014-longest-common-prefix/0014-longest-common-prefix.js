class TrieNode {
    constructor(value) {
        this.value = value
        this.children = new Map()
        this.endNode = false
    }

    addChild(value, node) {
        this.children.set(value, node)
    }

    addWord(word) {
        let node = this
        word.split('').forEach(char => {
            let childNode = node.children.get(char)
            if (!childNode) {
                childNode = new TrieNode(char)
                node.addChild(char, childNode)
            }
            node = childNode
        })
    }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const trie = new TrieNode(null)
    let minLength = Infinity
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]
        if (str.trim().length === 0) return ""
        minLength = Math.min(minLength, str.length)
        trie.addWord(str)
    }

    let children = trie.children
    let result = ''

    while (children.size === 1 && minLength-- > 0) {
        let keys = children.keys()
        const val = keys.next().value
        children = children.get(val).children
        result += val
    }
    return result

};