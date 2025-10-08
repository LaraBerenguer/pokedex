import { useNavigate } from "react-router";
import type { Pokemon } from "../types/types";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Badge from "./ui/Badge";
import FavIcon from "./ui/FavIcon";

interface PokemonCardProps {
    pkm: Pokemon;
    onToggleFavorite?: (id: number) => void;
    isFavorite?: boolean;
}

const PokemonCard = ({ pkm, onToggleFavorite, isFavorite }: PokemonCardProps) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`pokemon/${pkm.id}`)
    };

    const handleFavorites = () => {
        onToggleFavorite?.(pkm.id)
    }

    return (
        <div className="pokemon-card w-64 min-w-[250px] border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col gap-3 rounded-xl bg-white">
            <div className="pokemon--card-fav flex self-end">
                <FavIcon onClick={handleFavorites} isFavorite={isFavorite} />
            </div>
            <div className="pokemon-card--info flex flex-col items-center gap-3">
                <section className="pokemon-card--img w-full flex justify-center">
                    <img 
                        src={`${pkm.image}`} 
                        alt={pkm.name}
                        className="w-24 h-24 object-contain"
                    />
                </section>
                <section className="pokemon-card--name text-lg font-semibold text-gray-800 text-center">
                    {capitalizeFirstLetter(pkm.name)}
                </section>
                <section className="pokemon-card--types flex gap-2 flex-wrap justify-center">
                    {pkm.types.map(t => <Badge key={t.name} type={t.name} />)}
                </section>
            </div>
            <button 
                className="details-button cursor-pointer border border-gray-400 rounded-lg p-2 mt-auto font-medium text-gray-700 transition-all duration-200 hover:text-pink-400 hover:border-pink-400 hover:shadow-md" 
                onClick={handleViewDetails}
            >
                View Details
            </button>
        </div>
    )

};

export default PokemonCard;