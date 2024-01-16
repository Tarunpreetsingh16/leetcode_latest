
var RandomizedSet = function() {
    this.map = new Map();
    this.storage = Array.from({length: 0});
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;
    this.storage.push(val);
    this.map.set(val, this.storage.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    this.storage[index] = this.storage[this.storage.length - 1];
    this.map.set(this.storage[index], index);

    this.storage.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.storage[Math.floor(Math.random() * this.storage.length - 0)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */