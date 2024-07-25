package main

import (
	"fmt"
)

func shortestPalindrome(s string) string {
	//Reverse the original string and create the combined one
	rev_s := reverseString(s)
	combined := s + "#" + rev_s
	//We create the KMP table
	table := KMPTable(combined)
	//The length of the longest palindrome preffix is the last entry in the table KMP
	palindrome_length := table[len(table)-1]
	//We get the remaining suffix in the original string that excludes the preffix segment
	suffix := s[palindrome_length:]

	return reverseString(suffix) + s //We return the shortest palindrome by adding the reverse of the suffix to the original string
}

func reverseString(s string) string {
	//We need to use runes since strings are not mutable in Go
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func KMPTable(s string) []int {
	// We initialize the table with zeros
	table := make([]int, len(s))
	j := 0 //Pointer to keep track of the longest preffix that is also a suffix

	for i := 1; i < len(s); i++ {
		//If characters match we add 1 to j and update the table
		if s[i] == s[j] {
			table[i] = j + 1
			j++
		} else {
			//If they don't match and j is bigger than 0, we set j to the previous position in the table
			if j > 0 {
				j = table[j-1]
				i-- //Decrement i to verfify once again the current character
			} else {
				//If j is 0, we set the table at ith position to 0
				table[i] = 0
			}
		}
	}
	return table
}

// Using the first Leetcode test
func main() {
	fmt.Println((shortestPalindrome("aabcbaaa")))
}
