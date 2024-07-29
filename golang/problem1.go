// Problem 1: Best Time to Buy and Sell Stock III

/*
Solution: Split problem into two separate subproblems. This is by finding
the max profit looking backwards with one transaction and the max profit
looking forwards with another transaction. We then just add each other at
each day and find the max profit overall.
*/

package main

import "fmt"

func bestTime2Transactions(arr []int) int {
	//Initialize help arrays
	backardLooking := make([]int, len(arr))
	forwardLooking := make([]int, len(arr))

	
	//Keep the best profit for each day looking backwards
	maxProfit := 0
	currMin := arr[0]
	for i := 0; i < len(arr); i++ {
		if arr[i] < currMin {
			currMin = arr[i]
		}
		if arr[i]-currMin > maxProfit {
			maxProfit = arr[i] - currMin
		}
		backardLooking[i] = maxProfit
	}

	//Keep the best profit for each day looking forwards
	maxProfit = 0
	currMax := arr[len(arr)-1]
	for i := len(arr) - 1; i > 0; i-- {
		if arr[i] > currMax {
			currMax = arr[i]
		}
		if currMax-arr[i] > maxProfit {
			maxProfit = currMax - arr[i]
		}
		forwardLooking[i] = maxProfit
	}

	//Find the max profit overall by adding the best possible output for both subarrays
	
	maxProfit = 0
	for i := 0; i < len(arr); i++ {
		if backardLooking[i]+forwardLooking[i] > maxProfit {
			maxProfit = backardLooking[i] + forwardLooking[i]
		}

	}

	return maxProfit

}

func main() {
	input := []int{3,3,5,0,0,3,1,4}
	fmt.Println(bestTime2Transactions(input))
}
