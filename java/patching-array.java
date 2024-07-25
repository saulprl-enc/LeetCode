class Solution {
    public int minPatches(int[] nums, int n) {
        ArrayList<Long> appliedPatches = new ArrayList<>();
        long patch = 1;
        int i = 0;

        while (patch <= n) {
            if (i < nums.length && nums[i] <= patch) {
                patch += nums[i];
                i++;
            } else {
                appliedPatches.add(patch);
                patch += patch;
            }
        }

        return appliedPatches.size();
    }
}