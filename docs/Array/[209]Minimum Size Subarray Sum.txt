# [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)

Given an array of positive integers `nums` and a positive integer `target`, return _the **minimal length** of a_ _subarray_ _whose sum is greater than or equal to_ `target`. If there is no such subarray, return `0` instead.

**Example 1:**

**Input:** target = 7, nums = [2,3,1,2,4,3]
**Output:** 2
**Explanation:** The subarray [4,3] has the minimal length under the problem constraint.

**Example 2:**

**Input:** target = 4, nums = [1,4,4]
**Output:** 1

**Example 3:**

**Input:** target = 11, nums = [1,1,1,1,1,1,1,1]
**Output:** 0

## Idea

Given the problem's description, the `nums` array can contain multiple subarrays where the sum of their elements equals the target. We employ the two-pointer approach to efficiently determine the shortest such subarray.

## Solution
```
function minSubArrayLen(target: number, nums: number[]): number {  
  let left = 0;  
  let right = 0;  
  let sum = 0;  
  let len = Infinity; // max  
  
  while (right < nums.length) {  
    sum += nums[right];  
  
    while (sum >= target) {  
      sum -= nums[left];  
      len = Math.min(len, right - left + 1);  
      left++;  
    }  
    right++;  
  }  
  
  return len === Infinity ? 0 : len;  
};
```

1. **Initialization**: Start with two pointers, `left` and `right`, both positioned at the beginning of the `nums` array. Declare a variable `len` initialized to store the length of the shortest subarray found.

2. **Iterating with the `right` pointer**: As we move the `right` pointer through `nums`, continuously add `nums[right]` to our running `sum`.

3. **Adjusting the `left` pointer**: If the `sum` exceeds or equals the target:

    - Calculate the current subarray's length.
    - Update `len` to be the minimum between its current value and the newly computed subarray length.
    - Subtract `nums[left]` from the `sum` and increment the `left` pointer.
4. **Exploring Potential Subarrays**: Increment the `right` pointer and repeat the process, exploring other possible subarrays.

5. **Returning the Result**: Conclude by returning `len`. If no suitable subarray is found, return `0`.

## My Words

## idea
Given the problem's description, `nums` can have multiple subarrays whose elements sum up to the target. The two-pointer approach is a suitable solution to find the shortest such subarray.

## Solution
We initiate two pointers, `left` and `right`, both starting at the beginning of the `nums` array. We also declare a variable `len` to store the length of the current shortest subarray.
As we iterate through `nums` with the `right` pointer,  we increment add `nums[right]` to our `sum`. If the `sum` becomes greater than or equal to the target, we record the current subarray's length, and update our `len` with the minimum of the previously recorded length and the new length. Decrement `sum` by `nums[left]` and move the `left` pointer one step forward.
We continue the process and move the `right` pointer to explore other potential subarrays.
In the end, if we haven't found any suitable subarray, we return `0`. Otherwise, we return the length of the shortest subarray.
