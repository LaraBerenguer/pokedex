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
    selectedType: string,
    setSelectedType: (term: string) => void,
    pokemonLoading: boolean,
    pokemonError: string | null;
    typesLoading: boolean,
    typesError: string | null;
};

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [selectedType, setSelectedType] = useState<string>("")
    const { pokemons, setPokemons, loading: pokemonLoading, error: pokemonError } = usePokemon();
    const { types, loading: typesLoading, error: typesError } = useType();

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) => {
            const searchMatch = searchTerm === "" || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = selectedType === "" || pokemon.types.some(t => t.name === selectedType);
            return searchMatch && typeMatch;
        });
    }, [pokemons, searchTerm, selectedType])


    const value = useMemo(() => ({
        pokemons,
        filteredPokemons,
        types,
        setPokemons,
        setSearchTerm,
        searchTerm,
        selectedType,
        setSelectedType,
        pokemonLoading,
        pokemonError,
        typesLoading,
        typesError
    }), [pokemons, filteredPokemons, types, pokemonLoading, typesLoading, pokemonError, typesError, selectedType]);

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