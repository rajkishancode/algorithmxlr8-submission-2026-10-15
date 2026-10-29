<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Reverse String

**Difficulty:** `Easy`

## Problem

Write a function that reverses a string. On LeetCode the input string is given as an array of characters s, and you must reverse it by modifying the input array in-place with O(1) extra memory.

Use the two pointer technique: place a pointer left at index 0 and a pointer right at the last index. While left < right, swap s[left] and s[right], then move left one step forward and right one step back. When the pointers meet or cross, every character has been moved to its mirrored position and the string is reversed. This takes O(n) time and needs no second array.

The whole input line is the string s, including any spaces. Letter case is not changed, so "Hannah" becomes "hannaH". A single character stays as it is.

Input format: a single line containing the string s.

Output format: print the reversed string on one line.

## Examples

### Example 1

**Input**
```
s = "hello"
```
**Output**
```
olleh
```

**Explanation:** Swap h and o, then e and l; the middle l stays. The result is "olleh".

### Example 2

**Input**
```
s = "Hannah"
```
**Output**
```
hannaH
```

**Explanation:** Swap H and h, then a and a, then n and n. Case is kept, so the result is "hannaH".

### Example 3

**Input**
```
s = "a"
```
**Output**
```
a
```

**Explanation:** left and right start at the same index, so nothing is swapped.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/reverse-string-two-pointers).