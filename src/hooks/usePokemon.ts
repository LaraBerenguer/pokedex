import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import { getUrlId } from "../utils/getUrlId";

interface RawPokemon {
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
  height: number;
  stats: { base_stat: number; stat: { name: string } }[];
}

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        if (!response.ok) throw new Error(`Error fetching pokémon! Try again`);
        const data = await response.json();

        const pokemons = await Promise.all(
          data.results.map(async (pokemon: { url: string, name: string }) => {
            const response = await fetch(pokemon.url);
            if (!response.ok) throw new Error(`Error fetching ${pokemon.name}`);
            const d: RawPokemon = await response.json();
            const uId = getUrlId(pokemon.url)

            return {
              id: uId,
              name: pokemon.name,
              image: d.sprites.front_default,
              types: d.types.map((t: any) => ({
                name: t.type.name
              })),
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
