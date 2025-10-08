import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import { pokemonService } from "../services/pokemonService";

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError("");

        const pokemons = await pokemonService.fetchPokemonList(50);
        setPokemons(pokemons);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Error loading pokémons");
        }
        console.error("Error processing pokémons", err);

      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemons, setPokemons, loading, error };
}
