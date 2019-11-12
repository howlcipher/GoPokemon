package main

import (
	"fmt"
)

//move set variables
type flyingMoves bool
type fireMoves bool
type normalMoves bool

//every type struct will have pokemon type embeded into it
type pokemon struct {
name string
number int
}

//fire type
type fire struct {
pokemon
fireMoves
}

//flying type
type flying struct {
pokemon
flyingMoves 
}

//fireflying type
type fireflying struct {
pokemon
//not embeded from fire or flying.  These types were declared as bool above.
flyingMoves
fireMoves
}

//normal type
type normal struct{
  pokemon
  //declared as bool above
  normalMoves
}

//method ember needing a fire type
func  (p fire)ember(){
if p.fireMoves == true {
fmt.Println(p.name, "used ember")
}
}

//method of ember needing fireflying
func  (p fireflying)ember(){
if p.fireMoves == true {
fmt.Println(p.name, "used ember")
}
}

//gust function needing pokemon type parameter
func gust(p pokemon){
fmt.Println(p.name, "used gust")
}

//only works if the fireflying has flying moves
func fly(f fireflying){
if f.flyingMoves {
  fmt.Println(f.pokemon.name, "used FLY")
} else {
  fmt.Println(f.pokemon.name, "has no flying moves")
}

}

//fireStyle interface 
type fireStyle interface{
  ember()
}

func main() {
  //normal type
  Meowth := normal{pokemon{"Meowth",52},true}
 	
  //fireflying type
  Moltres:= fireflying{pokemon{"Moltres", 146},true, true}
  
  //fire type
  Charmander := fire{pokemon{"Charmander", 4},true}
	
  fmt.Println(Moltres.name, "has flyingMoves", Moltres.flyingMoves, "&", "fireMoves", Moltres.fireMoves)
  //using the interface fireStyle Moltres can access ember
  fireStyle.ember(Moltres)
  gust(Moltres.pokemon)

      fly(Moltres)
      Moltres.flyingMoves = false
      fly(Moltres)
  fmt.Println("-----")

  fmt.Println(Charmander.name, "has fireMoves", Charmander.fireMoves)
  //has access to the firestyle interface as both methods of ember are included using fire and fireflying receivers
  fireStyle.ember(Charmander)

  fmt.Println("-----")
  fmt.Println(Meowth.name, "has normalMoves", Meowth.normalMoves)
  
  //we want this to not work
  //fireStyle.ember(Meowth)

  
  //when you don't use a receiver you can have pokemon using the wrong moves.  Gust takes an aregument of pokemon type.
  gust(Meowth.pokemon)
  

}