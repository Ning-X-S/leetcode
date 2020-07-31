// 给出两个非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

function ListNode (val) {
  this.val = val
  this.next = null
}

function test (l1, l2) {
  var res = new ListNode(null)
  // temp是res的傀儡，因为一会temp要被覆盖，但是temp的一举一动一直被res记录着；
  var temp = res
  var jinwei = 0
  while (l1 || l2 || jinwei) {
    if (!l1) l1 = new ListNode(null)
    if (!l2) l2 = new ListNode(null)
    /** 逻辑开始 */
    var val = ((l1.val || 0) + (l2.val || 0) + jinwei)
    jinwei = val > 9 ? 1 : 0
    temp.next = new ListNode(val % 10)
    temp = temp.next
    /** 逻辑结束 */
    l1 = l1.next
    l2 = l2.next
  }
  return res.next
}

console.log(test)
