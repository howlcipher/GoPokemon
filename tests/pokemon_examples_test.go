package tests

import (
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
)

func TestGoPokemonExamples(t *testing.T) {
	// Glob doesn't search recursively arbitrarily deep, so we use WalkDir instead
	err := filepath.WalkDir("../GoPokemon", func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".go" {
			t.Run(filepath.Base(path), func(t *testing.T) {
				// We run "go run" on each file to ensure it compiles and executes successfully
				cmd := exec.Command("go", "run", path)
				// Provide dummy input for scripts that use fmt.Scanln (1 entry: Bulbasaur)
				cmd.Stdin = strings.NewReader("1\nBulbasaur\n")
				output, err := cmd.CombinedOutput()
				if err != nil {
					t.Fatalf("Execution failed for %s: %v\nOutput:\n%s", path, err, string(output))
				}
			})
		}
		return nil
	})

	if err != nil {
		t.Fatalf("Failed walking directory: %v", err)
	}
}
