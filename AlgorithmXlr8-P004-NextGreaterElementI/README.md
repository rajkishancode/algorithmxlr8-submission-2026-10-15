<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Next Greater Element I

**Difficulty:** `Easy`

## Problem

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Greater means strictly greater. The search for each value always happens in nums2, starting just after the position of that value in nums2; the order of values in nums1 only decides the order of the answers.

Follow up: Could you find an O(nums1.length + nums2.length) solution?

Input format: The first line contains an integer m, the length of nums1. The second line contains m space-separated integers, the elements of nums1. The third line contains an integer n, the length of nums2. The fourth line contains n space-separated integers, the elements of nums2.

Output format: Print the m values of ans, space-separated on a single line.

## Examples

### Example 1

**Input**
```
nums1 = [4,1,2], nums2 = [1,3,4,2]
```
**Output**
```
[-1,3,-1]
```

**Explanation:** For 4: it is at index 2 of nums2 and the only value to its right is 2, so there is no next greater element and the answer is -1. For 1: it is at index 0 of nums2 and the next greater element is 3. For 2: it is the last element of nums2, so the answer is -1.

### Example 2

**Input**
```
nums1 = [2,4], nums2 = [1,2,3,4]
```
**Output**
```
[3,-1]
```

**Explanation:** For 2: it is at index 1 of nums2 and the next greater element is 3. For 4: it is the last element of nums2, so the answer is -1.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/next-greater-element-i).