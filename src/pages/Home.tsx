import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/ui/Spinner";
import { usePokemonContext } from "../context/PokemonContext";

function Home() {
  const { pokemons, loading, error } = usePokemonContext()
  if (loading) { return <Spinner /> }

  return (
    <>
      <section className="home-search">{/*Filter type and search section*/}</section>
      <section className="home-filter">{/*Filter type and search section*/}</section>
      <section className="home-list gap-2 flex flex-wrap">
        {pokemons.map(p => <PokemonCard key={p.id} pkm={p} />)}
        {pokemons.length == 0 && <p className="text-sm">Oop! There's no pokemon in this tall grass 🍃</p>}
        {error && <p className="text-sm">{error}</p>}
      </section>
    </>
  );
};

export default Home;