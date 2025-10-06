import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import Spinner from "../components/ui/Spinner";
import { usePokemonContext } from "../context/PokemonContext";

function Home() {
  const { filteredPokemons, loading, error } = usePokemonContext()
  if (loading) { return <Spinner /> }
  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 mb-4">{error}</p>
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
      <section className="home-filter">{/*Filter type and search section*/}</section>
      <section className="home-list gap-2 flex flex-wrap">
        {filteredPokemons.length ? filteredPokemons.map(p => <PokemonCard key={p.id} pkm={p} />) :
            <p className="text-sm w-full text-center">Oops! There's no pokemon in this tall grass 🍃</p>}
      </section>
    </section>
  );
};

export default Home;