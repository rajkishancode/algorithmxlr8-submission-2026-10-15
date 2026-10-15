<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Determine Color of a Chessboard Square

**Difficulty:** `Easy`

## Problem

You are given coordinates, a string that represents the coordinates of a square of the chessboard.

A chessboard has 8 columns labelled 'a' through 'h' from left to right and 8 rows labelled 1 through 8 from bottom to top. The squares alternate between two colors, black and white, so that no two squares sharing an edge have the same color. The square a1 in the bottom left corner is black.

Determine the color of the given square. The coordinate will always represent a valid chessboard square: the first character is a letter and the second character is a number.

Note: the original LeetCode problem returns true if the square is white and false if it is black. Here you print the color name instead: White or Black.

Input format: a single line with the coordinate string, for example a1.

Output format: print White if the square is white, otherwise print Black.

## Examples

### Example 1

**Input**
```
coordinates = "a1"
```
**Output**
```
Black
```

**Explanation:** Column a is column 1 and the row is 1. 1 + 1 = 2 is even, and every square whose column number plus row number is even has the same color as a1, which is black.

### Example 2

**Input**
```
coordinates = "h3"
```
**Output**
```
White
```

**Explanation:** Column h is column 8 and the row is 3. 8 + 3 = 11 is odd, so the square has the opposite color of a1, which is white.

### Example 3

**Input**
```
coordinates = "c7"
```
**Output**
```
Black
```

**Explanation:** Column c is column 3 and the row is 7. 3 + 7 = 10 is even, so the square is black.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/determine-color-of-a-chessboard-square).