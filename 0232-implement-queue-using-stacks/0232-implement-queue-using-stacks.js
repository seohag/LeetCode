
const MyQueue = function() {
    this.mainStack = [];
    this.subStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.mainStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.mainStack.length) {
        this.subStack.push(this.mainStack.pop());
    }
    
    const poppedValue = this.subStack.pop();
    
    while (this.subStack.length) {
        this.mainStack.push(this.subStack.pop());
    }
    
    return poppedValue;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.mainStack.length) {
        this.subStack.push(this.mainStack.pop());
    }
    
    const poppedValue = this.subStack[this.subStack.length - 1];
    
    while (this.subStack.length) {
        this.mainStack.push(this.subStack.pop());
    }
    
    return poppedValue;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (!this.mainStack.length && !this.subStack.length) {
        return true;
    }
    
    return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */