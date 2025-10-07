import { useNavigate } from "react-router";
import type { Pokemon } from "../types/types";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Stats from "./Stats";
import Badge from "./ui/Badge";
import GoBackButton from "./ui/GoBackButton";

interface DetailsCardProps {
    pkm: Pokemon | undefined;
}

const DetailsCard = ({ pkm }: DetailsCardProps) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/")
    };

    if (pkm === undefined) {
        return <p className="text-sm w-full text-center">Oops! Your pokemon is not here 🍃</p>
    }


    return (
        <div className="details-card bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 max-w-sm w-full text-center">
            <div className="details-card--back self-start">
                <GoBackButton onClick={handleGoBack} />
            </div>
            <div className="details-card--info flex flex-col gap-3">
                <section className="details-card--name text-2xl font-semibold text-gray-800">
                    <h2>{capitalizeFirstLetter(pkm.name)}</h2>
                </section>
                <section className="details-card--img h-40 flex justify-center">
                    <img src={pkm.image} alt={pkm.name} className="w-40"></img>
                </section>
                <section className="details-card--types flex flex-wrap justify-center gap-2 mt-2">
                    {pkm.types.map(t => <Badge key={t.name} type={t.name} />)}
                </section>
                <section className="details-card--size flex justify-center gap-3 mt-4">
                    <div className="details-card--size-height flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 w-28 shadow-sm">
                        <p className="text-sm text-gray-500">Height</p>
                        <p className="text-lg font-semibold text-gray-800">{pkm.height} m</p>
                    </div>
                    <div className="details-card--size-weight flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 w-28 shadow-sm">
                        <p className="text-sm text-gray-500">Weight</p>
                        <p className="text-lg font-semibold text-gray-800">{pkm.weight} kg</p>
                    </div>
                </section>
                <div className="details-card--stats w-full mt-4">
                    <Stats pkm={pkm} />
                </div>
            </div>
        </div>
    )

};

export default DetailsCard;