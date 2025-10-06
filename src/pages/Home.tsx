import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/ui/Spinner";
import { usePokemonContext } from "../context/PokemonContext";

function Home() {
  const { pokemons, loading, error } = usePokemonContext()
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
    <>
      <section className="home-search">{/*Filter type and search section*/}</section>
      <section className="home-filter">{/*Filter type and search section*/}</section>
      <section className="home-list gap-2 flex flex-wrap">
        {pokemons.map(p => <PokemonCard key={p.id} pkm={p} />)}
        {pokemons.length == 0 && <p className="text-sm">Oop! There's no pokemon in this tall grass 🍃</p>}
      </section>
    </>
  );
};

export default Home;