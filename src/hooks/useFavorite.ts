import { useState } from "react";
import { usePokemonContext } from "../context/PokemonContext";

export function useFavorite() {
    const { pokemons, favorites, setFavorites } = usePokemonContext();
    const [error, setError] = useState<string | null>(null);

    const toggleFavorite = (id: number) => {
        try {
            setError(null);
            const pokemon = pokemons.find(p => p.id === id);
            if (!pokemon) return;

            const isAlreadyFavorite = favorites.some(f => f.id === id);
            let newFavorites;

            if (isAlreadyFavorite) {
                // remove
                newFavorites = favorites.filter(f => f.id !== id);
            } else {
                // add
                newFavorites = [...favorites, pokemon];
            }

            localStorage.setItem("localStoragePokemon", JSON.stringify(newFavorites));
            setFavorites(newFavorites);
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

    return { favorites, toggleFavorite, isFavorite, error };
}
