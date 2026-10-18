<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Add Digits

**Difficulty:** `Easy`

## Problem

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

For example, if num is 38, first add its digits to get 3 + 8 = 11. Since 11 still has more than one digit, add its digits again: 1 + 1 = 2. Since 2 has only one digit, the process stops and the answer is 2.

If num is already a single digit (0 through 9), no addition is needed and the answer is num itself, so the answer for 0 is 0. Summing the digits of a number with two or more digits always gives a smaller number, so the process always ends.

Follow up: could you do it without any loop or recursion in O(1) runtime?

Input format: a single line containing the integer num.

Output format: print the final single digit.

## Examples

### Example 1

**Input**
```
num = 38
```
**Output**
```
2
```

**Explanation:** The process is 38 --> 3 + 8 --> 11, then 11 --> 1 + 1 --> 2. Since 2 has only one digit, return it.

### Example 2

**Input**
```
num = 0
```
**Output**
```
0
```

**Explanation:** 0 is already a single digit, so the answer is 0.

### Example 3

**Input**
```
num = 999999999
```
**Output**
```
9
```

**Explanation:** The nine digits sum to 81, and 8 + 1 = 9, which has one digit.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/add-digits).