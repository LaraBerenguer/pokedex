import type { Pokemon } from "../types/types";
import { getUrlId } from "../utils/getUrlId";

interface RawPokemon {
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
  height: number;
  stats: { base_stat: number; stat: { name: string } }[];
}

interface PokemonListResponse {
  results: { url: string; name: string }[];
}

export const pokemonService = {
  async fetchPokemonList(limit: number = 50): Promise<Pokemon[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) throw new Error(`Error fetching pokémon! Try again`);
    
    const data: PokemonListResponse = await response.json();

    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        if (!response.ok) throw new Error(`Error fetching ${pokemon.name}`);
        
        const rawPokemon: RawPokemon = await response.json();
        const uId = getUrlId(pokemon.url);

        return {
          id: parseInt(uId),
          name: pokemon.name,
          image: rawPokemon.sprites.front_default,
          types: rawPokemon.types.map((t) => ({
            name: t.type.name
          })),
          weight: rawPokemon.weight,
          height: rawPokemon.height,
          stats: rawPokemon.stats
            .filter((s) => ["hp", "attack", "defense", "speed"].includes(s.stat.name))
            .map((s) => ({
              name: s.stat.name,
              base: s.base_stat,
            })),
        };
      })
    );

    return pokemons;
  }
};