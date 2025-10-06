import { createContext, useContext, useMemo, useState } from "react";
import type { Pokemon } from "../types/types";
import { usePokemon } from "../hooks/usePokemon";
import { useType } from "../hooks/useType";

interface PokemonContextProps {
    pokemons: Pokemon[],
    filteredPokemons: Pokemon[],
    types: string[],
    setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    searchTerm: string,
    setSearchTerm: (term: string) => void,
    pokemonLoading: boolean,
    pokemonError: string | null;
    typesLoading: boolean,
    typesError: string | null;
};

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const { pokemons, setPokemons, loading: pokemonLoading, error: pokemonError } = usePokemon();
    const { types, loading: typesLoading, error: typesError } = useType();

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
        types,
        setPokemons,
        setSearchTerm,
        searchTerm,
        pokemonLoading,
        pokemonError,
        typesLoading,
        typesError
    }), [pokemons, filteredPokemons, types, pokemonLoading, typesLoading, pokemonError, typesError]);

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