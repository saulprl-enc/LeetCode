func minPatches(nums []int, n int) int {
    patches := 0
    length := len(nums)
    index := 0
    patch:= 1
    for patch <= n{
        if index < length && nums[index] <= patch{
            patch += nums[index]
            index++
        }else {
            patch += patch
            patches++
        }

    }
    return patches
}

