import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePokemonContext } from "../context/PokemonContext";
import type { Pokemon } from "../types/types";
import DetailsCard from "../components/DetailsCard";

function Details() {
  const { id } = useParams<{ id: string }>();
  const { pokemons } = usePokemonContext();
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>()

  useEffect(() => {
    if (id && pokemons.length > 0) {
      const foundPokemon = pokemons.find(p => p.id === Number(id));
      setCurrentPokemon(foundPokemon);
    }
  }, [id, pokemons]);

  return (
    <div className="h-full w-full flex items-center">
      <DetailsCard pkm={currentPokemon} />
    </div>
  );
};

export default Details;