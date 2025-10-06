import { createContext, useContext, useMemo, useState } from "react";
import type { Pokemon } from "../types/types";
import { usePokemon } from "../hooks/usePokemon";

interface PokemonContextProps {
    pokemons: Pokemon[],
    filteredPokemons: Pokemon[],
    setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    searchTerm: string,
    setSearchTerm: (term: string) => void,
    loading: boolean,
    error: string | null;
};

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const { pokemons, setPokemons, loading, error } = usePokemon();

    const filteredPokemons = useMemo(() => {
        if (searchTerm === "") {
            return pokemons;
        }
        return pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchTerm)

        });
    }, [pokemons, searchTerm])


    const value = useMemo(() => ({
        pokemons,
        filteredPokemons,
        setPokemons,
        setSearchTerm,
        searchTerm,
        loading,
        error
    }), [pokemons, filteredPokemons, loading, error]);

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemonContext must be used within an PokemonProvider');
    }
    return context;
};