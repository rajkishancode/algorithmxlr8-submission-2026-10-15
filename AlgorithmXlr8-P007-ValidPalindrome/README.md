<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Valid Palindrome

**Difficulty:** `Easy`

## Problem

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Digits are kept and compared as they are, so "0P" becomes "0p", which is not a palindrome. If s contains no letters or digits at all, the cleaned string is empty, and an empty string reads the same forward and backward, so the answer is true.

Input format: a single line containing s. The line may contain spaces and punctuation, so read the whole line.

Output format: print true if s is a palindrome under the rules above, otherwise print false.

## Examples

### Example 1

**Input**
```
s = "A man, a plan, a canal: Panama"
```
**Output**
```
true
```

**Explanation:** After cleaning, the string is "amanaplanacanalpanama", which is a palindrome.

### Example 2

**Input**
```
s = "race a car"
```
**Output**
```
false
```

**Explanation:** After cleaning, the string is "raceacar", which reads "racaecar" backward, so it is not a palindrome.

### Example 3

**Input**
```
s = "0P"
```
**Output**
```
false
```

**Explanation:** After lowercasing, the cleaned string is "0p", which reads "p0" backward.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/valid-palindrome-two-pointers).