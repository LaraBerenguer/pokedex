import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import Badge from "../components/ui/Badge";
import Spinner from "../components/ui/Spinner";
import { usePokemonContext } from "../context/PokemonContext";

function Home() {
  const { filteredPokemons, pokemonLoading, pokemonError, types, typesLoading, typesError } = usePokemonContext()
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
    <section className="home flex flex-col gap-3 p-4">
      <section className="home-search">
        <Search />
      </section>
      <section className="home-filter overflow-x-auto">
        {typesLoading ?
          (<p className="text-xs w-full text-center">Loading types...</p>
          ) : typesError ? (
            (<p className="text-sm w-full text-center">Error loading types: {typesError}</p>)
          ) : (
            types.map(type => (
              <Badge type={type} />
            ))
          )
        }
      </section>
      <section className="home-list gap-2 flex flex-wrap">
        {filteredPokemons.length ? filteredPokemons.map(p => <PokemonCard key={p.id} pkm={p} />) :
          <p className="text-sm w-full text-center">Oops! There's no pokemon in this tall grass 🍃</p>}
      </section>
    </section>
  );
};

export default Home;