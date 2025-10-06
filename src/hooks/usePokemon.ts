import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import { getUrlId } from "../utils/getUrlId";

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const data = await response.json();

        const pokemons = await Promise.all(
          data.results.map(async (pokemon: { url: string, name: string }) => {
            const response = await fetch(pokemon.url);
            const d = await response.json();
            const uId = getUrlId(pokemon.url)

            return {
              id: uId,
              name: pokemon.name,
              image: d.sprites.front_default,
              types: d.types.map((t: any) => t.type.name),
              weight: d.weight,
              height: d.height,
              stats: d.stats.map((s: any) => ({
                name: s.stat.name,
                base: s.base_stat,
              })),
            };
          })
        );

        setPokemons(pokemons);
      } catch (err) {
        setError("Error loading pokémons");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemons, setPokemons, loading, error };
}
