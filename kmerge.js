const _ = require('lodash');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function appendNode(listTail, node) {
    if (!listTail) return node

    if (listTail.next) {
        throw new Error('Appending node to middle of list')
    }

    listTail.next = node
    return node
}

function createList(values) {
    let listTail = undefined
    let listHead = undefined
    for (const value of values) {
        let newNode = new ListNode(value)
        listTail = appendNode(listTail, newNode)
        if (!listHead) {
            listHead = newNode
        }
    }
    return listHead
}

function listToArray(listHead) {
    let currentNode = listHead
    let array = []
    while (currentNode) {
        array.push(currentNode.val)
        currentNode = currentNode.next
    }
    return array
}

function printList(listHead) {
    if (!listHead.next) {
        console.log(`[${listHead.val}]`)
        return
    }
    console.log(`[${listHead.val} -> ${printList(listHead.next)}]`)
}

// If I had a pre-determined maximum number of lists, this would be nearly linear
// read the current heads of the lists, pick the least, add it to the result and remove it from its own list.
// The comparison would be done in O(1) time, so the complexity would be the total number of elements in all lists

// but here we have an undetermined number of lists, and so we have to first find the minimum head every time. This is O(k).
// Then, we'd have to repeat this for every element in the total list

// We know that each list is at most M = 500 elements.
// And we have k <= 10000
// So this would put a limit at N = 5e6 elements, and a complexity of O(k * N) or O(k^2 * M) ~ c * 5e10
// Can we do better?

// If we only merge 2 lists each time, the node selection at each point will be O(1). 
// So overall, we run over two lists in O(N) time to compose a new list.
// Each of these merges reduces one list in the array, so we do this k-1 times (which is O(k))
// In the worst case, there will be two big lists to merge, that contain all the N elemenets. So, the overall complexity is still O(k * N)
// But at least the selection logic is so much easier to write

function mergeKLists(listArray) {
    while(twoOrMoreListsRemain(listArray)) {
        let list1 = listArray.shift()
        let list2 = listArray.shift()
        let mergedList = merge2Lists(list1, list2)
        listArray.push(mergedList)
    }
    return listArray.shift()
}

function twoOrMoreListsRemain(listArray) {
    return listArray.length >= 2
}

function merge2Lists(list1, list2) {
    let mergedListTail = undefined
    let mergedListHead = undefined
    let heads = [list1, list2]

    while (true) {
        let node = extractLowestNodeFromLists(heads)
        if (!node) {
            break
        }
        mergedListTail = appendNode(mergedListTail, new ListNode(node.val))    
        if (!mergedListHead) mergedListHead = mergedListTail
    }
    return mergedListHead
}

function extractLowestNodeFromLists(heads) {
    let indexOfSelectedHead

    // Defines which list to take the next node from
    if (!heads[0]) {
        indexOfSelectedHead = 1
    }
    else if (!heads[1]) {
        indexOfSelectedHead = 0
    }
    else if (heads[0].val < heads[1].val) {
        indexOfSelectedHead = 0
    } else {
        indexOfSelectedHead = 1
    }

    let selectedHead = heads[indexOfSelectedHead]
    if (selectedHead) {
        heads[indexOfSelectedHead] = selectedHead.next
    } 
    
    return selectedHead
}

module.exports = {
    ListNode,
    createList,
    printList,
    appendNode,
    listToArray,
    mergeKLists
}
