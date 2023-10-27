# [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

## Problem

Given an integer array `nums` sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.

**Example 1:**

**Input:** nums = [-4,-1,0,3,10]
**Output:** [0,1,9,16,100]
**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

**Example 2:**

**Input:** nums = [-7,-3,2,3,11]
**Output:** [4,9,9,49,121]

## Solution
```
function sortedSquares(nums: number[]): number[] {  
  let left = 0;  
  let right = nums.length - 1;  
  let result = [];  
  while (left <= right) {  
    const lsq = nums[left] * nums[left];  
    const rsq = nums[right] * nums[right];  
    if (lsq > rsq) {  
      result.unshift(lsq);  
      left++;  
    } else {  
      result.unshift(rsq);  
      right--;  
    }  }  
  return result;  
};
```

The nums array is sorted in non-decreasing order and may contain negative numbers. The square of a negative number can be greater than the square of a smaller positive number. To address this, we use the two-pointer approach. We place the left pointer at the start and the right pointer at the end of the nums array. While left is less than or equal to right, we square the values at these pointers and compare them. If the square of the value at left is greater than that of right, we insert the squared value from left into the beginning of the result array and move the left pointer one step forward. Otherwise, we insert the squared value from right into the beginning of the result array and move the right pointer one step backward. We also need to process the intersection position when left and right meet, thus the condition in the while loop includes an 'equal to' check. In the end, we return the result.
