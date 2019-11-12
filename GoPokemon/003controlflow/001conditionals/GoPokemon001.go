package main

import "fmt"

/*
Control flow helps create logical decieciions for data.  Using IF and SWITCH statments to perform if this do that stype of statements you can build a logic into a program.
*/

//a function that uses IF, ELSE IF, and ELSE
func lightscreen(p string) {
	pokemon := p

	// IF tests if a condition is true.  The below compares values.
	if pokemon == "Mr. Mime" {
		fmt.Println(pokemon, "used light screen")
	} else if pokemon == "Abra" { //ELSE IF is used if another condition is true if the previous ones were not
		fmt.Println(pokemon, "used light screen")
	} else { //ELSE will run if all other conditions are false, but you still want something to happen by default
		fmt.Println(pokemon, "can't use")
	}
}

func rareCandy(rc int) {
	//This is a switch statement it searches for a condition to be true and then excutes the code associated with the true condition.
	switch rc {
	//each case is a condition.  This example is look for rc to equal an int of 1 or 2.  If nothing is met the defaul runs similiar to the ELSE.
	case 1:
		fmt.Println("Only one rare candy. Make sure you use it on a Pokemon you really like.")
	case 2:
		fmt.Println("You have two rare candies.  Maybe you should use one?")
	default:
		fmt.Println("You have", rc, "rare candy(s)")

	}

}

func main() {
	//IF, ELSE IF, ELSE examples
	lightscreen("Mr. Mime")
	lightscreen("Abra")
	lightscreen("Gengar")

	//SWITCH examples
	rareCandy(1)
	rareCandy(2)
	rareCandy(83)

}
