import { usePokemonContext } from "../context/PokemonContext";


const FavoriteFilter = () => {
    const { setSelectedFilter } = usePokemonContext();

    return (
        <div className="favorite-filter justify-center flex gap-1">
            <button
                type="button"
                className="px-3 py-1 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition act"
                onClick={() => setSelectedFilter("all")}
            >
                All
            </button>
            <button
                type="button"
                className="px-3 py-1 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition"
                onClick={() => setSelectedFilter("favorites")}
            >
                Favorites
            </button>
        </div>
    );
};

export default FavoriteFilter;