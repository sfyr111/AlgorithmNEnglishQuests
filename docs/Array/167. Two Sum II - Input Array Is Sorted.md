# [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 < numbers.length`.

Return _the indices of the two numbers,_ `index1` _and_ `index2`_, **added by one** as an integer array_ `[index1, index2]` _of length 2._

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

**Example 1:**

**Input:** numbers = [2,7,11,15], target = 9
**Output:** [1,2]
**Explanation:** The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

**Example 2:**

**Input:** numbers = [2,3,4], target = 6
**Output:** [1,3]
**Explanation:** The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

**Example 3:**

**Input:** numbers = [-1,0], target = -1
**Output:** [1,2]
**Explanation:** The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

## Solution
```
function twoSum2(numbers: number[], target: number): number[] {  
  let left = 0;  
  let right = numbers.length - 1;  
  
  while (left < right) {  
    const sum = numbers[left] + numbers[right];  
  
    if (sum === target) {  
      return [left + 1, right + 1];  
    } else if (target > sum) { // numbers is sorted  
      left++;  
    } else if (target < sum) {  
      right--;  
    }  }  
  return [];  
};
```

## My Words
Since the array is sorted, we can use a two-pointer approach, a pointer `left` at the beginning and a pointer `right` at the end of the array. While `left` is less than `right`, calculate the sum of `nums[left]` and `nums[right]`. If the sum matches the target, return the positions of two pointers. If the sum is less than the target, increment the `left` pointer. Otherwise, decrement the `right` pointer. Continue this until the pointers meet. If no match is found, return an empty pair.  The time complexity of this approach is `O(n)`, where n is the length of the array, as we move the two pointers through the array at most once. The space complexity is `O(1)` as we only use a constant space. But, we can use a hash-table approach. The time complexity of this method is `O(n)`, and its space complexity is `O(n)` as the hash-table uses an extra space.
