package main

import "fmt"

/*
Structs are collections of data types.  The contain one ore more data types.
You can embed a struct within another to gain access to another struct's data types.  Structs can be used as recievers in methods and arguments in functions.
*/

//structs are custom types with an underlying type of struct
//type     underlying type
type villains string

//	name       type
var teamRocket villains

//type   underlying type
type pokemon struct {
	//atributes are the data types that structs hold.  They contain a name and an underlying type
	name     string
	number   int
	captured bool
	//structs can even include custom types as long as the type has been declared
	catchPhrase villains
}

type poison struct {
	//structs can also contain whol structs within them.  This is called embeding a struct
	pokemon
}

func main() {
	//to use a struct you must create values and store them inside a variable.  The structs are templates of variables essentially.
	Meowth := pokemon{"Meowth", 52, true, "Meowth, that's right!"}
	Ekans := poison{pokemon{"Ekans", 23, true, "Ekanssss"}}
	//just like other declared variables structs must be used if created
	fmt.Println("Struct 1", Meowth, "& Struct 2", Ekans)

	//single data points of structs can be accessed using the variable name and .datatype (exaple pokemon.name) to access the vale within
	fmt.Println("Team Rocket blasting off at the speed of light,", Meowth.catchPhrase)

	//Using a function to create a struct.  It returns the value of pokemon struct and places them into a variable
	Koffing := createPokemon("Koffing", 109, true, "coughing...")
	fmt.Println(Koffing)

	//Using a method created below using the pokemon reciever
	Meowth.tackel()

}

//structs have many uses such as using them in functions an putting methods on them.  Through the use of functions you can create a struct dynamically also.
func createPokemon(n string, d int, c bool, cp villains) pokemon {
	newPokemon := pokemon{n, d, c, cp}
	return newPokemon
}

//structs can also be used as recievers for using methods
func (p pokemon) tackel() {
	fmt.Println(p.name, "used tackle...and it hit")
}

//an interface to access the method if all the methods listed have recievers of the same type
type normalMoves interface {
	tackle()
}
