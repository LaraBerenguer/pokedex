import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Pokemon } from "../types/types";
import { usePokemon } from "../hooks/usePokemon";
import { useType } from "../hooks/useType";

interface PokemonContextProps {
    pokemons: Pokemon[],
    filteredPokemons: Pokemon[],
    types: string[],
    favorites: Pokemon[],
    setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    setFavorites: React.Dispatch<React.SetStateAction<Pokemon[]>>,
    searchTerm: string,
    setSearchTerm: (term: string) => void,
    selectedType: string,
    setSelectedType: (term: string) => void,
    selectedFilter: string,
    setSelectedFilter: (term: string) => void,
    pokemonLoading: boolean,
    pokemonError: string | null;
    typesLoading: boolean,
    typesError: string | null;
};

export const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [selectedType, setSelectedType] = useState<string>("")
    const [selectedFilter, setSelectedFilter] = useState<string>("all")
    const [favorites, setFavorites] = useState<Pokemon[]>([])
    const { pokemons, setPokemons, loading: pokemonLoading, error: pokemonError } = usePokemon();
    const { types, loading: typesLoading, error: typesError } = useType();

    //favorites
    useEffect(() => {
        try {
            const localPokemon = localStorage.getItem("localStoragePokemon");
            if (localPokemon) {
                const parsed = JSON.parse(localPokemon);
                const favoritesArray = Array.isArray(parsed) ? parsed : [parsed];
                setFavorites(favoritesArray);
            }
        } catch (err) {
            console.error("Error loading favorites from localStorage", err);
        }
    }, []);

    //filters
    const filteredPokemons = useMemo(() => {
        let pokemonsToFilter = pokemons;

        if (selectedFilter === "favorites") {
            pokemonsToFilter = favorites;
        }

        return pokemonsToFilter.filter((pokemon) => {
            const searchMatch = searchTerm === "" || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
            const typeMatch = selectedType === "" || pokemon.types.some(t => t.name === selectedType);
            return searchMatch && typeMatch;
        });
    }, [pokemons, favorites, searchTerm, selectedType, selectedFilter])

    const value = useMemo(() => ({
        pokemons,
        filteredPokemons,
        types,
        favorites,
        setPokemons,
        setFavorites,
        setSearchTerm,
        searchTerm,
        selectedType,
        setSelectedType,
        selectedFilter,
        setSelectedFilter,
        pokemonLoading,
        pokemonError,
        typesLoading,
        typesError
    }), [pokemons, filteredPokemons, types, favorites, pokemonLoading, typesLoading, pokemonError, typesError, selectedType, selectedFilter]);

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