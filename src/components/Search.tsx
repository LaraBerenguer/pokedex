import { usePokemonContext } from "../context/PokemonContext";

const Search = () => {
    const { searchTerm, setSearchTerm } = usePokemonContext();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search pokemon..."
            value={searchTerm}
            onChange={handleSearchChange}
        ></input>
    )
};

export default Search;