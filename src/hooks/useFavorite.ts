import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import { usePokemonContext } from "../context/PokemonContext";

export function useFavorite() {
    const [favorites, setFavorites] = useState<Pokemon[]>([])
    const { pokemons } = usePokemonContext();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setLoading(true);
            setError("");
            const localPokemons = localStorage.getItem("localStoragePokemon");

            if (localPokemons) {
                const parsed = JSON.parse(localPokemons);
                const favoritesArray = Array.isArray(parsed) ? parsed : [parsed];
                setFavorites(favoritesArray);
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError("Error loading favorites pokémon");
            }
            console.error("Error processing favorites pokémon", err);
        } finally {
            setLoading(false);
        }
    }, []);

    const toggleFavorite = (id: number) => {
        try {
            const pokemon = pokemons.find(p => p.id === id);
            if (!pokemon) return;

            setFavorites(prev => {
                const isAlreadyFavorite = prev.some(f => f.id === id);
                let newFavorites;

                if (isAlreadyFavorite) {
                    //remove
                    newFavorites = prev.filter(f => f.id !== id);
                } else {
                    //add
                    newFavorites = [...prev, pokemon];
                }

                localStorage.setItem("localStoragePokemon", JSON.stringify(newFavorites));
                return newFavorites;
            });
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError("Error updating favorites");
            }
            console.error("Error updating favorites", err);
        }
    };

    const isFavorite = (id: number) => {
        return favorites.some(f => f.id === id);
    };

    return { favorites, toggleFavorite, isFavorite, loading, error };
}
