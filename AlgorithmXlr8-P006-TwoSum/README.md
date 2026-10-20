<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Two Sum

**Difficulty:** `Easy`

## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. The two indices must be different, although the values stored at them may be equal (for example nums = [3, 3] with target = 6).

Indices are 0-based. LeetCode accepts the two indices in any order, but this page asks for the smaller index first.

Input format: the first line contains two integers n and target separated by a space. The second line contains the n integers of nums separated by single spaces.

Output format: print the two indices on one line, the smaller index first, separated by a single space.

Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

## Examples

### Example 1

**Input**
```
nums = [2,7,11,15], target = 9
```
**Output**
```
[0,1]
```

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2

**Input**
```
nums = [3,2,4], target = 6
```
**Output**
```
[1,2]
```

**Explanation:** nums[1] + nums[2] = 2 + 4 = 6. Index 0 cannot be used twice to form 3 + 3.

### Example 3

**Input**
```
nums = [3,3], target = 6
```
**Output**
```
[0,1]
```

**Explanation:** The two 3's are different elements at indices 0 and 1, and 3 + 3 = 6.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/two-sum-hash-tables).