class Solution {
    public int minPatches(int[] nums, int n) {
        ArrayList<Integer> appliedPatches = new ArrayList<>();
        int patch = 1;
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