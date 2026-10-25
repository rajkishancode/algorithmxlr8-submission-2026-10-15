<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Implement Queue using Stacks

**Difficulty:** `Easy`

## Problem

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop and empty).

Implement the MyQueue class:
- void push(int x) pushes element x to the back of the queue.
- int pop() removes the element from the front of the queue and returns it.
- int peek() returns the element at the front of the queue without removing it.
- boolean empty() returns true if the queue is empty, false otherwise.

Notes:
- You must use only standard operations of a stack, which means only push to top, peek/pop from top, size and is empty operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
- All the calls to pop and peek are valid, so they are never made on an empty queue.

Follow-up: can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

Input format: the first line contains an integer q, the number of operations. Each of the next q lines contains one operation: push x, pop, peek or empty.

Output format: push prints nothing. For every pop and peek print the returned value on its own line, and for every empty print true or false on its own line, in the order of the operations.

## Examples

### Example 1

**Input**
```
["push 1","push 2","peek","pop","empty"]
```
**Output**
```
1
1
false
```

**Explanation:** push(1): queue is [1].
push(2): queue is [1, 2] (leftmost is the front).
peek() returns 1.
pop() returns 1 and the queue becomes [2].
empty() returns false.

### Example 2

**Input**
```
["push 1","push 2","push 3","pop","push 4","pop","pop","empty"]
```
**Output**
```
1
2
3
false
```

**Explanation:** After pushing 1, 2 and 3 the queue is [1, 2, 3]. pop() returns 1. push(4) gives [2, 3, 4]. The next two pops return 2 and 3, leaving [4], so empty() returns false.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/implement-queue-using-stacks-data-structure-design).