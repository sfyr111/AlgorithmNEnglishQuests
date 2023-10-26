# [344. Reverse String](https://leetcode.com/problems/reverse-string/)

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

**Example 1:**

**Input:** s = ["h","e","l","l","o"]
**Output:** ["o","l","l","e","h"]

**Example 2:**

**Input:** s = ["H","a","n","n","a","h"]
**Output:** ["h","a","n","n","a","H"]

## Solution
```
function reverseString(s: string[]): void {  
  let right = s.length - 1;  
  let left = 0;  
  while (left < right) {  
    [s[left], s[right]] = [s[right], s[left]];  
    left++;  
    right--;  
  }  
};
```

This problem requires us to modify the array in-place. Thus, we can use the two-pointer approach to solve this. We initialize one pointer `left` at the beginning and the other pointer `right` at the end of the `s` array. While `left` is less than `right`, we swap `s[left]` and `s[right]`. After the swap, we increment the `left` pointer and decrement the `right` pointer until the two pointers meet.
