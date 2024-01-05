/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const CustomNode = function(word, edges) {
    this.word = word;
    this.edges = edges;
}

var ladderLength = function(beginWord, endWord, wordList) {
    let result = 0;
    if (beginWord != endWord) {
        const visited1 = new Map();

        const queue1 = new Queue();
        queue1.enqueue(new CustomNode(beginWord, 1));
        while (!queue1.isEmpty()) {
            let {word, edges} = queue1.dequeue();
            if (!visited1.has(word)) {
                visited1.set(word, edges);
                
                if (word === endWord) {
                    result = edges;
                } 
                else {
                    const validTransformations = getValidTransformations(word, wordList);
                    const unvisitedValidTransformations = getUnvisitedValidTransformations(
                        validTransformations, 
                        visited1);
                    enqueueTransformatons(queue1, unvisitedValidTransformations, edges);
                }
            }
        }

    }
    return result;
};

const getValidTransformations = (word, wordList) => {
    return wordList.filter(wordInList => {
        if (getNumberOfDiffChars(wordInList, word) === 1) return wordInList;
    });
};

const getNumberOfDiffChars = (string1, string2) => {
    let result = 0;
    if (string1.length === string2.length) {
        for (let i = 0; i < string1.length; i++) {
            if (string1.charAt(i) != string2.charAt(i)) result++;
        }
    }
    return result;
};

const getUnvisitedValidTransformations = (transformations, map) => {
    return transformations.filter(transformation => !map.has(transformation));
}; 

const enqueueTransformatons = (queue, transformations, edges) => {
    transformations.forEach(transformation => queue.enqueue(new CustomNode(transformation, edges + 1)));
};