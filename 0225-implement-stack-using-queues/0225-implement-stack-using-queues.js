
const MyStack = function() {
    this.mainQueue = [];
    this.subQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    while (this.mainQueue.length > 0) {
        this.subQueue.push(this.mainQueue.shift());
    }
    
    this.mainQueue.push(x);

    while (this.subQueue.length > 0) {
        this.mainQueue.push(this.subQueue.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.mainQueue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.mainQueue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if (this.mainQueue.length === 0) {
        return true;
    }
    
    return false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */