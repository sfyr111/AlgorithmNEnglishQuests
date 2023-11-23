```
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
```

### (Problem):
Given a list of sorted numbers, some of which might be repeated, how do you remove these extra numbers so that each one appears only once?

### (Which method should be used and why?):
Use the two-pointer method. Because the list is sorted, repeated numbers will be next to each other. By using two pointers, we can efficiently compare numbers and remove duplicates without needing extra space.

### (How is the solution implemented?):
1. Start with two pointers: `i` (shows the last unique number) and `j` (searches for the next unique number).
2. If `i` and `j` point to the same number, move `j` to skip the duplicate.
3. If they point to different numbers, move the number at `j` next to `i`. Then, move both pointers forward.
4. In the end, `i` will be at the position of the last unique number.

### (Questions):
1. **Will the order change?** No. Because when `i` and `j` point to different numbers, we first move `i` forward and then copy the number at `j` to `i`. This keeps the order of numbers.
2. **Why is the final length `i + 1`?** `i` points to the position of the last unique number. Since we start counting positions from 0, the total number of unique numbers is `i + 1`.

###  (Simple Explanation):
By using two pointers on a sorted list, we can quickly spot and remove extra repeated numbers, leaving us with only unique numbers at the start of the list. This method is efficient and keeps the order of the numbers. For example, `[0,0,1,1,1,2,2,3,3,4]` becomes `[0,1,2,3,4]` with 5 unique numbers.

### (Problem):
Given a list of sorted numbers, some of which might be repeated, how do you remove these extra numbers so that each one appears only once?

### (Which method should be used and why?):
Use the two-pointer method. Because the list is sorted, repeated numbers will be next to each other. By using two pointers, we can efficiently compare numbers and remove duplicates without needing extra space.

### (How is the solution implemented?):
1. Start with two pointers: `i` (shows the last unique number) and `j` (searches for the next unique number).
2. If `i` and `j` point to the same number, move `j` to skip the duplicate.
3. If they point to different numbers, move the number at `j` next to `i`. Then, move both pointers forward.
4. In the end, `i` will be at the position of the last unique number.

### (Questions):
1. **Will the order change?** No. Because when `i` and `j` point to different numbers, we first move `i` forward and then copy the number at `j` to `i`. This keeps the order of numbers.
2. **Why is the final length `i + 1`?** `i` points to the position of the last unique number. Since we start counting positions from 0, the total number of unique numbers is `i + 1`.

###  (Simple Explanation):
By using two pointers on a sorted list, we can quickly spot and remove extra repeated numbers, leaving us with only unique numbers at the start of the list. This method is efficient and keeps the order of the numbers. For example, `[0,0,1,1,1,2,2,3,3,4]` becomes `[0,1,2,3,4]` with 5 unique numbers.
