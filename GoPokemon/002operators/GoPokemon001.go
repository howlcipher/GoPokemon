package main

import "fmt"

//Operators are use to compare and manipulate values.  Here is a list of all the operators that you can use in the Go language.

/*

Arithmetic  Operations - 1
+  performs additition (Can be used to concatenate strings also)
-  performs subtraction
/  performs division
*  performs mutiplication

%  displays remainder after division
++ incrempents by one
-- decrements by one

Relational Operators - 2
== checks for equal values
!= checks for not equal values
>  checks for left side greater than right (example: 2 > 1 would be true)
<  checks for left side lesser than right
>= checks for left side greater than right or equal to (example: 2 > 1 & 2 >= 2 would be true)
<= checks for left side lesser than right or equal to

Logical Operators - 3
&& checks if both are true
|| checks if either is true
!  makes something not true

*/

func main() {
	// 1 Arithmetic Operators
	//name         value
	pokeballs := 3
	oakballs := 4

	//you can perform operations on value of variables
	fmt.Println(oakballs + pokeballs)
	//Or you can perform them in functions like Println()
	fmt.Println(4 - 3)
	fmt.Println(addPokeBalls(4, 3)) // *see below addPokeBalls()

	//2 Relation Operators
	//allow you to compare values
	charmander := 3
	pikachu := 25
	rockGym := "Brock"
	electricGym := "Lt. Surge"
	palletTown := "Nurse Joy"
	lavenderTown := "Nurse Joy"

	//the values are compared true or false is returned
	fmt.Println(charmander > pikachu)       // 3 > 25 is false
	fmt.Println(rockGym != electricGym)     //the value "Brock" does not equal "Lt. Surge" is true
	fmt.Println(palletTown == lavenderTown) //the values of palletTown and lavenderTown equal true

	//3 Logical Operators
	fmt.Println(charmander > pikachu && 3 > 2) // both must be true 3 > 25 and 3 > 2 false
	fmt.Println(rockGym == electricGym || electricGym != rockGym) // either can be true 
	fmt.Println(!(palletTown == lavenderTown)) // ! converts a statement from true or false
}
// *
func addPokeBalls(pokeballs int, oakballs int) int {
	return pokeballs + oakballs
}
