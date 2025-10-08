import FavoriteFilter from "../components/FavoriteFilter";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import Filter from "../components/ui/Filter";
import Spinner from "../components/ui/Spinner";
import { usePokemonContext } from "../context/PokemonContext";
import { useFavorite } from "../hooks/useFavorite";

function Home() {
  const { filteredPokemons, pokemonLoading, pokemonError } = usePokemonContext()
  const { toggleFavorite, isFavorite } = useFavorite();

  if (pokemonLoading) { return <Spinner /> }
  if (pokemonError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 mb-4">{pokemonError}</p>
        <p className="text-gray-600 text-sm">Try refreshing the page</p>
        <button className="text-sm text-decoration-line" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-col">
      <section className="home-search flex gap-3 mb-3">
        <Search />
        <FavoriteFilter />
      </section>
      <section className="home-filter overflow-x-auto mb-3">
        <Filter />
      </section>
      <section className="home-list gap-2 flex flex-wrap flex-1 overflow-y-auto justify-center">
        {filteredPokemons.length ? filteredPokemons.map(p =>
          <PokemonCard
            key={p.id}
            pkm={p}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite(p.id)}
          />) :
          <p className="text-sm w-full text-center">Oops! There's no pokemon in this tall grass 🍃</p>}
      </section>
    </div>
  );
};

export default Home;