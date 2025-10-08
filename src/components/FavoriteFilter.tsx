import { usePokemonContext } from "../context/PokemonContext";


const FavoriteFilter = () => {
    const { setSelectedFilter } = usePokemonContext();

    return (
        <div className="favorite-filter font-oxanium justify-center flex gap-1">
            <button
                type="button"
                className="cursor-pointer px-3 py-1 rounded-md bg-transparent border-1 border-transparent transition-all duration-200 hover:border-pink-400 hover:text-pink-400 focus:bg-pink-200 text-sm font-medium"
                onClick={() => setSelectedFilter("all")}
            >
                All
            </button>
            <button
                type="button"
                className="cursor-pointer px-3 py-1 rounded-md bg-transparent border-1 border-transparent transition-all duration-200 hover:border-pink-400 hover:text-pink-400 focus:bg-pink-200 text-sm font-medium"
                onClick={() => setSelectedFilter("favorites")}
            >
                Favorites
            </button>
        </div>
    );
};

export default FavoriteFilter;