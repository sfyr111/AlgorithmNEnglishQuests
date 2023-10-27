349. Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

Given two integer arrays `nums1` and `nums2`, return _an array of their intersection_. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

**Input:** nums1 = [1,2,2,1], nums2 = [2,2]
**Output:** [2]

**Example 2:**

**Input:** nums1 = [4,9,5], nums2 = [9,4,9,8,4]
**Output:** [9,4]
**Explanation:** [4,9] is also accepted.

## Solution

```
function intersection(nums1: number[], nums2: number[]): number[] {  
  const set = new Set(nums1);  
  
  let intersection = [];  
  
  for (const num of nums2) {  
    if (set.has(num)) {  
      intersection.push(num);  
      set.delete(num);  
    }  }  
  return intersection;  
};

var intersection = function(nums1, nums2) {  
    return [...new Set(nums1.filter(n => nums2.includes(n)))];  
};
```

## My Words

This problem needs to find `nums1` and `nums2` their intersection. We can utilize a set data structure to remove any duplicate elements. Thus convert `nums1` into a set, and check for each value in `nums2` to see if it exists in the set, then it's a part of the intersection.

## Be Better

"We can utilize a set data structure to eliminate duplicates. First, we convert `nums1` into a set. Then, for each value in `nums2`, if it exists in the set, it's part of the intersection."
