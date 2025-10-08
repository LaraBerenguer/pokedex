

const FavoriteFilter = () => {

    return (
        <div className="favorite-filter justify-center flex gap-2">
            <button
                type="button"
                className="px-3 py-1 rounded-md border-2 border-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition act"
            >
                All
            </button>
            <button
                type="button"
                className="px-3 py-1 rounded-md border-2 border-gray-100 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-100 dark:focus:bg-gray-600 text-sm font-medium transition"
            >
                Favorites
            </button>
        </div>
    );
};

export default FavoriteFilter;