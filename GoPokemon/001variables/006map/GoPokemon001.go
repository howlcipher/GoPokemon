package main

import (

	"fmt"
)

//takes user input and returns a string for Pokemon name
func NewPokemon() string {
	//user input for a string
	fmt.Print("Enter Pokemon: ")
	var newPokemon string
	fmt.Scanln(&newPokemon)
	return newPokemon
}

//takes user input and returns an int for pokedex number entry
func NewPokedex() int {
	//user input for an int
	fmt.Print("Enter Pokemon Pokedex Number: ")
	var newPokedexEntry int
	fmt.Scanln(&newPokedexEntry)
	return newPokedexEntry
}

//to create a map with 1 or more entries
//     function           returns
func PokedexMAPEntry() map[int]string {
	//creating a map
	var THISpokedexMAP = make(map[int]string)
	//number of entries declared
	var EntryNum int
	//ask and asign the value to EntryNum
	fmt.Println("how many entries? ")
	fmt.Scanln(&EntryNum)

	//loop through asking for pokemon based on how many entries were inputted 
	for i := 1; i <= EntryNum; i++ {
		THISpokedexMAP[NewPokedex()] = NewPokemon()
		//fmt.Println(THISpokedexMAP)
	} 
	//returns the map
return THISpokedexMAP
}


func main() {
	//make a map - automatically sorts on key make(map[key]value)
	var pokedexMAP = make(map[int]string)

	//predefined map entries
	//map   key       value
	pokedexMAP[003] = "Charmander"
	pokedexMAP[004] = "Charmeleon"
	pokedexMAP[001] = "Bublbasaur"

	//print in user defined order
	fmt.Println(pokedexMAP[3], pokedexMAP[4], pokedexMAP[1])

	
	//new map entry
	pokedexMAP[NewPokedex()] = NewPokemon()

	//create a map of more than one
	dPokedexMAP := PokedexMAPEntry()

	//displays entire map
	fmt.Println("single pokemon added", pokedexMAP)
	fmt.Println("multiple pokemon added", dPokedexMAP)
}
