import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search';
import { usePokemonContext } from '../../context/PokemonContext';

jest.mock('../../context/PokemonContext');
const mockUsePokemonContext = usePokemonContext as jest.MockedFunction<typeof usePokemonContext>;

const mockPokemons = [
    {
        id: 1,
        name: "bulbasaur",
        image: "bulba.png",
        types: [{ name: "grass" }],
        height: 7,
        weight: 69,
        stats: []
    },
    {
        id: 2,
        name: "charmander",
        image: "char.png",
        types: [{ name: "fire" }],
        height: 6,
        weight: 85,
        stats: []
    },
];

describe('Search Component', () => {
    const mockSetSearchTerm = jest.fn();

    beforeEach(() => {
        mockUsePokemonContext.mockReturnValue({
            searchTerm: '',
            setSearchTerm: mockSetSearchTerm,
            pokemons: mockPokemons,
            filteredPokemons: mockPokemons,
            types: ["grass", "fire"],
            favorites: [],
            setPokemons: jest.fn(),
            setFavorites: jest.fn(),
            selectedType: "",
            setSelectedType: jest.fn(),
            selectedFilter: "all",
            setSelectedFilter: jest.fn(),
            pokemonLoading: false,
            pokemonError: null,
            typesLoading: false,
            typesError: null,
        } as any);
    });

    test('renders search input', () => {
        render(<Search />);
        expect(screen.getByPlaceholderText('Search Pokémon...')).toBeInTheDocument();
    });

    test('calls setSearchTerm when typing', () => {
        render(<Search />);
        const input = screen.getByPlaceholderText('Search Pokémon...');
        fireEvent.change(input, { target: { value: 'pikachu' } });
        expect(mockSetSearchTerm).toHaveBeenCalledWith('pikachu');
    });
});