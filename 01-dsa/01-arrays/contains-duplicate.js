/*
Problem:
Contains Duplicate

Pattern:
HashMap

Time Complexity:
O(n)

Space Complexity:
O(n)
*/

function containsDuplicate(nums) {

    const seen = {};

    for (const num of nums) {

        if (seen[num]) {
            return true;
        }

        seen[num] = true;
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));