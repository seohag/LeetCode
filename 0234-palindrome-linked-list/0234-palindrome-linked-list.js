/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const array = [];
    
    function pushValue(node) {
        if (node) {
            array.push(node.val);
            pushValue(node.next);
        }
    }
    
    pushValue(head);
    
    while (head) {
        if (head.val !== array.pop()) {
            return false;
        }
        head = head.next;
    }
    
    return true;
};
