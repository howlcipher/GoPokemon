# GoPokemon

Most of the time when learning programming languages or an aspect of one that might already be known, the examples that can be used for reference are either tough to follow or typically boring like an animal or car type. This reference material is aimed to spice up the examples with Pokemon to give a greater context to the Go programming language. If you have an understanding of how Pokemon work and want to work on or are learning the Go language, this will be an excellent resource for you.

## Getting Started

1. **Run the Backend & Frontend**: 
   A Go server is provided to serve the interactive frontend.
   ```bash
   go run main.go
   ```
   Then open your browser to `http://localhost:8080` to view the lessons in action!

2. **Explore the Lessons**:
   All Go code examples are located in the `lessons/` directory. They cover topics ranging from basic variables to interfaces and methods. You can run individual scripts like so:
   ```bash
   go run lessons/001variables/001declaration/GoPokemon001.go
   ```

3. **Run the Tests**:
   The `tests/` directory contains tests to ensure all lessons execute correctly.
   ```bash
   go test ./tests/...
   ```

## Project Structure
- `lessons/`: Contains all the Go examples organized by topic.
- `frontend/`: Contains the static HTML/JS/CSS app that acts as an interactive learning guide.
- `main.go`: The backend HTTP server for the frontend.
- `tests/`: Contains test suites to validate the Go examples.
