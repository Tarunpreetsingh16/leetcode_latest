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
    let result = Infinity;
    // wordList.push(beginWord);
    if (beginWord != endWord) {
        const visited1 = new Map();
        const visited2 = new Map();

        const queue1 = new Queue();
        queue1.enqueue(new CustomNode(beginWord, 1));

        // const queue2 = new Queue();
        // if (wordList.includes(endWord)) queue2.enqueue(new CustomNode(endWord, 0));

        // while (!queue1.isEmpty() && !queue2.isEmpty()) {
        while (!queue1.isEmpty()) {
            let node = queue1.dequeue();
            let word = node.word;
            let edges = node.edges;
            if (!visited1.has(word)) {
                visited1.set(word, edges);
                
                // if (visited2.has(word)) {
                if (word === endWord) {
                    result = edges;
                } 
                else {
                    const validTransformations = getValidTransformations(word, wordList);
                    const unvisitedValidTransformations = getUnvisitedValidTransformations(validTransformations, visited1);
                    enqueueTransformatons(queue1, unvisitedValidTransformations, edges);
                }
            }

            // node = queue2.dequeue();
            // word = node.word;
            // edges = node.edges;
            // if (!visited2.has(word)) {
            //     visited2.set(word, edges);
                
            //     if (visited1.has(word)) {
            //         console.log(result, "there")
            //         result = Math.min(visited1.get(word) + edges + 1, result);
            //     } 
            //     else {
            //         const validTransformations = getValidTransformations(word, wordList);
            //         const unvisitedValidTransformations = getUnvisitedValidTransformations(validTransformations, visited2);
            //         enqueueTransformatons(queue2, unvisitedValidTransformations, edges);
            //     }
            // }
        }

    }
    return result === Infinity ? 0 : result;
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