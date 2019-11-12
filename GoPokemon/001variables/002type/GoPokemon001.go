package main

import "fmt"

/*
Three things should be constantly looked at when using Go, name, value, and type.  There are a lot of types like most programming languages.

String
int
bool
struct
interface
[]slice{}

These are only some of the types available in Go.  You can also make your own type with and underlying type.

*/
//  name    type     value
var pokemon string = "Pikachu"

//  name    type  value
var pokedex int = 25

//   type      underlying type
type solarBeam bool

//structs are a collection of types
//   type      underlying type
type grassType struct {
	name      string
	number    int
	solarBeam bool
}

//slices are a collection of one type
//  name           type (a slice of string)
var waterPokemon = []string{"Psyduck", "Staryu", "Shellder"}

func main() {
	//use Printf to see the type
	//%T for type, \n for new line, and then type the variable to perform on
	//printf("%T\n", variable)

	//struct created with type and values displayed
	bulbasaur := grassType{"Bulbasaur", 1, true}
	fmt.Printf("&T\n", bulbasaur)

	//slice value
	fmt.Printf("&T\n", waterPokemon)

	//  name      type        value
	var grassMove solarBeam = true
	var ghostMove solarBeam = false
	//comparing two solarBeam type variables
	fmt.Println("\n", grassMove != ghostMove)
	//displays type and value
	fmt.Printf("&T\n", grassMove)
	fmt.Printf("&T\n", ghostMove)

}
