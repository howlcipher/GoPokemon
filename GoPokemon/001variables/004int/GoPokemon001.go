package main

import "fmt"

//1 ints are one of the many numerical value systems within the Go language.  Ints represent the value of whole numbers.  Fractional numbers can be used with the type float.

//   name      type  value
var charmander int = 3

//2 when "+" concatenating strings the strings are forced to+gether("together").
//With ints and other numberical types the addition symbol works to conduct a mathmatical operation

// name value    --type is inferred as there is no decimal Go interprupts this as an int
var hp = 4
var damage = 3

func main() {
	//example 1
	fmt.Println(charmander)
	//example 2
	//prints the equation out
	fmt.Print("4 - 3 = ")
	//prints the answer to hp - damage
	fmt.Println(hp - damage)

	//string and ints carry different value even though they can be displayed in the same way
	pokemon := "3"
	charmander := 3
	pokeballs := 3
	fmt.Println(pokemon, charmander, pokeballs)
	//compares the values of variables
	fmt.Println(pokeballs == charmander)
	//can't compare as their types are different
	//fmt.Println(pokemon == charmander) //will have an error
	fmt.Println(pokemon, charmander) //the use of the comma still works, but not "+"
}
