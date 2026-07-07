package main

import (
	"log"
	"net/http"
)

func main() {
	// Serve static files from the frontend directory
	fs := http.FileServer(http.Dir("./frontend"))
	http.Handle("/", fs)

	port := "8080"
	log.Printf("Starting server on http://localhost:%s\n", port)
	
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal("Server failed: ", err)
	}
}
