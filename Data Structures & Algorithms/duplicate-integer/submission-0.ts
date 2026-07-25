class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let check = new Set();
        for (const num of nums){
            if (!check.has(num)) check.add(num);
            else return true;
        }
        return false;
    }
}
