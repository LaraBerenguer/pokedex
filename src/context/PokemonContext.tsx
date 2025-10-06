import { createContext, useContext, useMemo } from "react";
import type { Pokemon } from "../types/types";
import { usePokemon } from "../hooks/usePokemon";

interface PokemonContextProps {
    pokemons: Pokemon[],
    setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    loading: boolean,
    error: string | null;
};

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
       
    const { pokemons, setPokemons, loading, error } = usePokemon();

    const value = useMemo(() => ({
        pokemons,
        setPokemons,
        loading,
        error
    }), [pokemons, loading, error]);

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