package main

//Working with Strings

import (
	"fmt"
	"strings"
)

func main() {
	//  name  type    value
	var character string = "ash"
	//display the value of character
	fmt.Println(character)

	//  name  type    value
	var rival string = "gary"
	//display rival's value and character's value in a sentence.  Use "," to create a space and "+" to join.
	fmt.Println(rival, "is", character+"'s rival")
	// using ","
	fmt.Println(rival, character)
	//using "+"
	fmt.Println(rival + character)
	//no string variables can be shorter, but not dynamic or reusable for another purpose
	fmt.Println("gary is ash's rival")

	//strings can be manipulated and return a value that can be stored in a variable using built in functions (strings package was iported to make this work).  See https://golang.org/pkg/strings/ for a list of other functions that you can use.  Below are an example of two.
	rival = strings.ToUpper(rival)
	fmt.Println(rival)
	rival = strings.ToLower(rival)
	fmt.Println(rival)
}
