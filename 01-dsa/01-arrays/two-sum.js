/*
Problem:
Two Sum

Pattern:
HashMap

Time Complexity:
O(n)

Space Complexity:
O(n)
*/
function twoSum(nums, target){
    const seen = {};

    for (let i = 0; i < nums.length; i++) {

        const current = nums[i];
        const complement = target - current;

        if (seen[complement] !== undefined) {
            return [seen[complement], i]
        }
        seen[current] = i;
        
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,8,4,5], 9));


