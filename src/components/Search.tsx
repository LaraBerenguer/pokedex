import { usePokemonContext } from "../context/PokemonContext";

const Search = () => {
    const { searchTerm, setSearchTerm } = usePokemonContext();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    return (
        <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-md text-base bg-gray-50 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors"
        />
    )
};

export default Search;