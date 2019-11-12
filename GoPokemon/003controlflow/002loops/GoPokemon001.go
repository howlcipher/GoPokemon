package main

import "fmt"
/*
FOR loops and RANGE over allow the processing of data, enhance the use of if statements, and allow for greater logical control within an applications
*/

func main() {

//FOR loop
//The FOR loop will repeat as long the loop condition remains true.  The below example compars a variable to an int.
//  intiial level    loop condition    //increments (closer to condition being false)
for pokemonLevel:=1; pokemonLevel <= 5; pokemonLevel++{
	//will print a total of 5 times 
	fmt.Println("Your current level is", pokemonLevel,"\t")
}

//RANGE loop
//name        type     value - slices are a common item to range over
pokemonRed := []string{"Charmander","Charmeleon","Charizard"}

//The range will generate a count for each item in a list
//  count	  for each item in slice
for evolve := range pokemonRed {
	//Prints the following line the number of times in the range
	//										the slice   range number - used like this to choose an item from the slice (example: pokemonRed[1])
	fmt.Println("Your current Pokemon is:", pokemonRed[evolve])
}

}