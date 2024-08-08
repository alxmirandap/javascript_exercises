const kmerge = require('./kmerge');


describe('k-merge functions', () => {
    let l1, l2, l3;
    let a1 = [1, 4, 5, 12, 27, 34, 35, 35, 100, 101]
    let a2 = [1, 3, 4,7, 8, 500, 510]
    let a3 = [2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15, 16, 100, 101, 500, 560]
    let expectedArray;   
    describe('Setup', () => {
        l1 = kmerge.createList(a1)
        l2 = kmerge.createList(a2)
        l3 = kmerge.createList(a3)
        expectedArray = a1
            .concat(a2)
            .concat(a3)
            .sort((a,b) => a-b)       
    })

    it('merging 3 lists should return a sorted equivalent list - array version', () => {
        let mergedList = kmerge.mergeKLists([l1, l2, l3])
        let retrievedArray = kmerge.listToArray(mergedList)
        expect(retrievedArray).toStrictEqual(expectedArray)
    })

    it('merging 2 lists should be possible with mergeKLists', () => {
        let mergedList = kmerge.mergeKLists([l1, l2])
        let retrievedArray = kmerge.listToArray(mergedList)
        expect(retrievedArray).toStrictEqual(a1.concat(a2).sort((a,b) => a-b))
    })
})

describe('List functions', () => {
    let node1, node2, node3
    beforeEach(() => {
        node1 = new kmerge.ListNode(3)
        node2 = new kmerge.ListNode(5)
        node3 = new kmerge.ListNode(7)
    })

    it('appending a node to an empty list returns that node', () => {
        let newList = kmerge.appendNode(undefined, node1)
        expect(newList).toBe(node1)
    })

    it('appending a node to a single node returns a list with two nodes', () => {
        let tail = kmerge.appendNode(node1, node2)
        expect(node1.next).toBe(tail)
        expect(tail).toBe(node2)
    })
    
    it('appending a node to a listTail links that node to the end of the list', () => {
        let tail = kmerge.appendNode(node1, node2)
        let newTail = kmerge.appendNode(tail, node3)

        expect(node2.next).toBe(newTail)
        expect(newTail).toBe(node3)        
    })

    it('createList receives an array and returns the corresponding list', () => {
        let listHead = kmerge.createList([3,5,7])
        expect(listHead.val).toBe(node1.val)
        expect(listHead.next.val).toBe(node2.val)
        expect(listHead.next.next.val).toBe(node3.val)
    })

    it('listToArray is the inverse of createList', () => {
        let array = [3,6,1,4,9,7]
        let listHead = kmerge.createList(array)
        let retrievedArray = kmerge.listToArray(listHead)
        expect(retrievedArray).toStrictEqual(array)
    })
})