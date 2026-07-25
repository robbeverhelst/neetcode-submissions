class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const sCount = new Map<string, number>();
        const tCount = new Map<string, number>();

        for (const char of s){
            sCount.set(char, (sCount.get(char) ?? 0) + 1);
        }
        for (const char of t){
            tCount.set(char, (tCount.get(char) ?? 0) + 1);
        }

        for (const [char, amount] of sCount){
            if(amount != tCount.get(char)) return false
        }

        return true;
    }
}
