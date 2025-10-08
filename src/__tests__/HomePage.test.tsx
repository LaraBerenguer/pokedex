import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

//Mock context
const mockUsePokemonContext = jest.fn();
jest.mock("../context/PokemonContext", () => ({
  usePokemonContext: () => mockUsePokemonContext(),
}));

//Mock useFavorite
jest.mock("../hooks/useFavorite", () => ({
  useFavorite: () => ({
    toggleFavorite: jest.fn(),
    isFavorite: jest.fn(() => false),
  }),
}));

//Mock children
jest.mock("../components/Search", () => {
  return function MockSearch() {
    return <div data-testid="search">Search Component</div>;
  };
});

jest.mock("../components/FavoriteFilter", () => {
  return function MockFavoriteFilter() {
    return <div data-testid="favorite-filter">Favorite Filter</div>;
  };
});

jest.mock("../components/ui/Filter", () => {
  return function MockFilter() {
    return <div data-testid="filter">Filter Component</div>;
  };
});

jest.mock("../components/PokemonCard", () => {
  return function MockPokemonCard({ pkm }: { pkm: any }) {
    return <div data-testid={`pokemon-${pkm.id}`}>{pkm.name}</div>;
  };
});

jest.mock("../components/ui/Spinner", () => {
  return function MockSpinner() {
    return <div data-testid="spinner">Loading...</div>;
  };
});

//Mock Pokemon
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

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Pokemon cards when context provides pokemons", () => {
    //Mock context data
    mockUsePokemonContext.mockReturnValue({
      pokemons: mockPokemons,
      filteredPokemons: mockPokemons,
      types: ["grass", "fire"],
      favorites: [],
      setPokemons: jest.fn(),
      setFavorites: jest.fn(),
      searchTerm: "",
      setSearchTerm: jest.fn(),
      selectedType: "",
      setSelectedType: jest.fn(),
      selectedFilter: "all",
      setSelectedFilter: jest.fn(),
      pokemonLoading: false,
      pokemonError: null,
      typesLoading: false,
      typesError: null,
    });

    render(<Home />);    
    expect(screen.getByTestId("search")).toBeInTheDocument();
    expect(screen.getByTestId("favorite-filter")).toBeInTheDocument();
    expect(screen.getByTestId("filter")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-1")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-2")).toBeInTheDocument();
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("charmander")).toBeInTheDocument();
  });

  test("shows loading spinner when pokemonLoading is true", () => {
    mockUsePokemonContext.mockReturnValue({
      pokemons: [],
      filteredPokemons: [],
      types: [],
      favorites: [],
      setPokemons: jest.fn(),
      setFavorites: jest.fn(),
      searchTerm: "",
      setSearchTerm: jest.fn(),
      selectedType: "",
      setSelectedType: jest.fn(),
      selectedFilter: "all",
      setSelectedFilter: jest.fn(),
      pokemonLoading: true,
      pokemonError: null,
      typesLoading: false,
      typesError: null,
    });

    render(<Home />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows error message when there is a pokemonError", () => {
    const errorMessage = "Failed to load Pokemon";
    mockUsePokemonContext.mockReturnValue({
      pokemons: [],
      filteredPokemons: [],
      types: [],
      favorites: [],
      setPokemons: jest.fn(),
      setFavorites: jest.fn(),
      searchTerm: "",
      setSearchTerm: jest.fn(),
      selectedType: "",
      setSelectedType: jest.fn(),
      selectedFilter: "all",
      setSelectedFilter: jest.fn(),
      pokemonLoading: false,
      pokemonError: errorMessage,
      typesLoading: false,
      typesError: null,
    });

    render(<Home />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText("Try refreshing the page")).toBeInTheDocument();
    expect(screen.getByText("Refresh")).toBeInTheDocument();
  });

  test("shows 'no pokemon' message when filteredPokemons is empty", () => {
    mockUsePokemonContext.mockReturnValue({
      pokemons: [],
      filteredPokemons: [],
      types: [],
      favorites: [],
      setPokemons: jest.fn(),
      setFavorites: jest.fn(),
      searchTerm: "",
      setSearchTerm: jest.fn(),
      selectedType: "",
      setSelectedType: jest.fn(),
      selectedFilter: "all",
      setSelectedFilter: jest.fn(),
      pokemonLoading: false,
      pokemonError: null,
      typesLoading: false,
      typesError: null,
    });

    render(<Home />);
    expect(screen.getByText("Oops! There's no pokemon in this tall grass 🍃")).toBeInTheDocument();
  });
});