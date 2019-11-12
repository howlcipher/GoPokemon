package main

import (
	"fmt"
)

/*
Declaring variables in Go can be done in a few ways.  The following examples are all String examples while there are other types such as ints, bools, etc.  The focus of this is to see how variables can be declared and not what type they are.  variable names but begin with a letter and contain (letters, numbers, and _).  Variables can't use the names of types or keywords for their names. var String = "sometext" or var func = 3 will not work.
*/

// new variable
// 1
//  name     type
var pokeball string

//   2 the variable is declared with a value
//  name		value      Type is inferred
var pokemon = "Psyduck"
var potion = "" // type string is inferred by "" value is

//   3
//   name     type     //value
var Pikachu string = "Pikachu"

func declareInFunc() {
	//   4 using the ":=" declaration must be done within a func.  Such as this one or main or any other prefered.
	// name     //value
	Jolteon := "Jolteon"
	fmt.Println("example 4's value printed out:", Jolteon)
}

func main() {
	// example 1
	fmt.Println("example 1's value printed out:", pokeball)

	// example 2
	fmt.Println("example 2's value printed out:", pokemon)

	// example 3
	fmt.Println("example 3's value printed out:", Pikachu)

	//example 4
	// name       value
	vaporeon := "Vaporeon"
	fmt.Println("example 4's value printed out:", vaporeon)
	declareInFunc()

	//5 changing the value of a variable already declared
	// name     value
	pokemon = "Bellsprout"
	fmt.Println("example 5's value printed out:", pokemon)

	//6 examples of other types declared
	//ints
	candy := 6
	var potion = 9
	//  name  type   value
	var xSpeed int = 3
	fmt.Println("example 6's int values:", candy, potion, xSpeed)

	//slices
	//name     type  value
	badges := []int{1, 2, 3}
	var pokedex = []string{"charmander", "squirtle", "bulbasaur"}
	fmt.Println("example 6's slice values:", badges, pokedex)

	//7 if you declare a variable you must use in
	greatball := "vulpix"
	//deleting or commenting out "//" the following line will eliminate the use of the variable "greatball".  Go will not allow a program to run with a declared variable not used.
	fmt.Println("example 7's value:", greatball)

	//8 if you wish to have a variable but not use it, the blank identifier "_" can be used.
	//   value
	_ = "Mr. Mime"
	//This avoids the delcared not used scenario, but also does not allow the variable to be used.  the blank identifier should be used as a place holder if needed
	//this will give an error fmt.Println(_)
}
