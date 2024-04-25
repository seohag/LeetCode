/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return;
    }
    
    let firstPoint = headA;
    let secondPoint = headB;
    
    while (firstPoint !== secondPoint) {
        firstPoint = firstPoint.next;
        secondPoint = secondPoint.next;
    
    
        if (firstPoint === secondPoint) {
            return firstPoint;
        }
    
        if (firstPoint === null) {
            firstPoint = headB;
        }
    
        if (secondPoint === null) {
            secondPoint = headA;
        }
    }
    
    return firstPoint;
};