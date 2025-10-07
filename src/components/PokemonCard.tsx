import { useNavigate } from "react-router";
import type { Pokemon } from "../types/types";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Badge from "./ui/Badge";

interface PokemonCardProps {
    pkm: Pokemon;
}

const PokemonCard = ({ pkm }: PokemonCardProps) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`pokemon/${pkm.id}`)
    };

    return (
        <div className="pokemon-card border-2 border-gray-200 shadow-sm p-2 flex flex-col gap-2">
            <div className="pokemon--card-fav">
                <section className="pokemon--card--fav text-sm">☆</section>
            </div>
            <div className="pokemon-card--info">
                <section className="pokemon-card--img">
                    <img src={`${pkm.image}`}></img>
                </section>
                <section className="pokemon-card--name">
                    {capitalizeFirstLetter(pkm.name)}
                </section>
                <section className="pokemon-card--types flex gap-2">
                    {pkm.types.map(t => <Badge key={t.name} type={t.name} />)}
                </section>
            </div>
            <button className="details-button border-1 border-gray-400 rounded-lg p-1" onClick={handleViewDetails}>View Details</button>
        </div>
    )

};

export default PokemonCard;