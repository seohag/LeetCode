/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if (!head) {
        return false;
    }
    
    let front = head;
    let back = head;
    
    while(front && front.next){
        front = front.next.next;
        back = back.next;
        
        if (front === back) {
            return true; 
        }
    }
    
    return false;
};