package main

import (
	"fmt"
)

// move set variables
type flyingMoves bool
type fireMoves bool
type normalMoves bool

// every type struct will have pokemon type embeded into it
type pokemon struct {
	name   string
	number int
}

// FirePokemon type
type FirePokemon struct {
	pokemon
	fireMoves
}

// FlyingPokemon type
type FlyingPokemon struct {
	pokemon
	flyingMoves
}

// FireFlyingPokemon type
type FireFlyingPokemon struct {
	pokemon
	// not embeded from fire or flying.  These types were declared as bool above.
	flyingMoves
	fireMoves
}

// NormalPokemon type
type NormalPokemon struct {
	pokemon
	//declared as bool above
	normalMoves
}

// method ember needing a fire type
func (p FirePokemon) ember() {
	if p.fireMoves {
		fmt.Println(p.name, "used ember")
	}
}

// method of ember needing fireflying
func (p FireFlyingPokemon) ember() {
	if p.fireMoves {
		fmt.Println(p.name, "used ember")
	}
}

// gust function needing pokemon type parameter
func gust(p pokemon) {
	fmt.Println(p.name, "used gust")
}

// only works if the fireflying has flying moves
func fly(f FireFlyingPokemon) {
	if f.flyingMoves {
		fmt.Println(f.pokemon.name, "used FLY")
	} else {
		fmt.Println(f.pokemon.name, "has no flying moves")
	}
}

// Emberer interface
type Emberer interface {
	ember()
}

func main() {
	//normal type
	Meowth := NormalPokemon{
		pokemon:     pokemon{name: "Meowth", number: 52},
		normalMoves: true,
	}

	//fireflying type
	Moltres := FireFlyingPokemon{
		pokemon:     pokemon{name: "Moltres", number: 146},
		flyingMoves: true,
		fireMoves:   true,
	}

	//fire type
	Charmander := FirePokemon{
		pokemon:   pokemon{name: "Charmander", number: 4},
		fireMoves: true,
	}

	fmt.Println(Moltres.name, "has flyingMoves", Moltres.flyingMoves, "&", "fireMoves", Moltres.fireMoves)
	//using the interface Emberer Moltres can access ember
	var e Emberer = Moltres
	e.ember()
	
	gust(Moltres.pokemon)

	fly(Moltres)
	Moltres.flyingMoves = false
	fly(Moltres)
	fmt.Println("-----")

	fmt.Println(Charmander.name, "has fireMoves", Charmander.fireMoves)
	//has access to the interface
	e = Charmander
	e.ember()

	fmt.Println("-----")
	fmt.Println(Meowth.name, "has normalMoves", Meowth.normalMoves)

	//we want this to not work
	// var _ Emberer = Meowth

	//when you don't use a receiver you can have pokemon using the wrong moves.  Gust takes an argument of pokemon type.
	gust(Meowth.pokemon)
}
