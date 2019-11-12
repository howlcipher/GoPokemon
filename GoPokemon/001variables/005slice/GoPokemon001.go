package main

import "fmt"

func newPokedex() []string {
	thisPokedex := []string{}
	//number of entries declared
	var EntryNum int
	//ask and asign the value to EntryNum
	fmt.Println("how many entries? ")
	fmt.Scanln(&EntryNum)
	//Pokemon name declared
	var pName string
	//loop through asking for pokemon based on how many entries were inputted
	for i := 1; i <= EntryNum; i++ {
		//ask and asign the value to pName
		fmt.Println("Pokemon name? ")
		fmt.Scanln(&pName)
		thisPokedex = append(thisPokedex, pName)
	}
	//returns the slice
	return thisPokedex
}

//function to sort pokedex (slice of string) alphabetically
func pokedexBubbleSort(pokedex []string) []string {
	/*The loop starts at the end (the final two indexs of the slice) comparing 2 strings alphabetically.  If the order is needed to swap they do if not they stay.
	  The loop then moves to the next pair (the two right before the final index).
	  The loops moves one item at a time until the slices are arranged alphabetically.*/
	for i := len(pokedex); i > 0; i-- {
		for pokemon := 1; pokemon < i; pokemon++ {
			if pokedex[pokemon-1] > pokedex[pokemon] {
				intermediate := pokedex[pokemon]
				pokedex[pokemon] = pokedex[pokemon-1]
				pokedex[pokemon-1] = intermediate
			}
		}
	}
	//returns the slice
	return pokedex
}

//returns the value of the last entry in the pokedex (slice of string) as a string
func lastPokedex(pokedex []string) string {
	//gets the value of the last entry by calculating the length (not zero based) and minus 1
	return pokedex[len(pokedex)-1]
}

func main() {

	//create a slice of string called pokedex
	pokedex := []string{"Pikachu", "Ivysaur", "Ponyta", "Hitmonchan"}

	//display an un-ordered slice of string
	//a user defined slice of string using a function newPokedex()
	np := newPokedex()
	//display an un-ordered slice of string
	//pre-defined slice of string
	fmt.Println("Predefined",pokedex)
	//displays slice in the order they were entered
	fmt.Println("no sorting:", np)
	//displays slice in alphabetically ordered
	bsnp := pokedexBubbleSort(np)
	fmt.Println("bubble sort", bsnp)

	//displays the last pokemon in the pokedex(slice of string)
	//predefined pokedex
	lp := lastPokedex(pokedex)
	//user defined pokedex
	lp2 := lastPokedex(bsnp)
	//prints the last entry in both pokedex(slices)
	fmt.Println("The last Pokemon in the Predefined Pokedex is,", lp)
	fmt.Println("The last Pokemon in the User Defined Pokedex is,", lp2)
}
