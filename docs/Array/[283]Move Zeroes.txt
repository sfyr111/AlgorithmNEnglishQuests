
# [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**

**Input:** nums = [0,1,0,3,12]
**Output:** [1,3,12,0,0]

**Example 2:**

**Input:** nums = [0]
**Output:** [0]

## Solution

### Two-pointer Approach Visualization:

#### Idea:

We use two pointers: one (`slow`) to point to the location where the next non-zero element should be placed and another (`fast`) to scan through the array for non-zero elements.

#### Visualization:

Consider the array `nums = [0, 1, 0, 3, 12]`.

Initial State:
```
nums:   0   1   0   3   12
        ^   ^
       slow fast
```

1. Both pointers start at the first element. If `fast` points to `0`, it simply moves ahead, and `slow` remains in its place.

2. Once `fast` finds a non-zero, it assigns its value to `slow` and moves ahead, and `slow` also moves one step.
```
nums:   1   1   0   3   12
            ^   ^
           slow fast
```

3. Now, `fast` finds another zero and continues moving forward.

4. `Fast` finds a `3` which is non-zero. It assigns its value to `slow` and both pointers move forward.
```
nums:   1   3   0   3   12
                ^   ^
               slow fast
```

5. Finally, `fast` finds `12`, assigns its value to `slow`, and moves to the end of the array. `Slow` also increments.
```
nums:   1   3   12  3   12
                    ^   
                   slow
```

6. Now, we know any element after `slow` should be set to zero. Therefore, we fill the remaining part of the array with zeros:
```
nums:   1   3   12  0   0
```

#### Code:
```javascript
var moveZeroes = function(nums) {  
    var slow = 0;  
    var fast = 0;  
      
    while (fast < nums.length) {  
          
        if (nums[fast] !== 0) {  
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];  
            slow++;  
        }  
        fast++;  
    }  
};
```

#### Explanation:

The `fast` pointer identifies non-zero elements and the `slow` pointer keeps track of where the next non-zero should be placed. After placing all non-zeros correctly using the two pointers, we fill the remainder of the array with zeros. The approach ensures each non-zero element is only moved once (optimal in terms of the number of operations).

## My Words
This problem requires us to modify the `nums` array in-place. To achieve this, we can use a two-pointer approach. We employ one `fast` pointer to iterate through each`slow` pointer points to the position where the next non-zero element should be placed. If `nums[fast]` is not `0`, we swap `nums[fast]` with `nums[slow]` and then increment the `slow` pointer by one position.
