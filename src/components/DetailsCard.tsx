import type { Pokemon } from "../types/types";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Badge from "./ui/Badge";

interface DetailsCardProps {
    pkm: Pokemon | undefined;
}

const DetailsCard = ({ pkm }: DetailsCardProps) => {
    console.log(pkm)
    if (pkm === undefined) {
        return <p className="text-sm w-full text-center">Oops! Your pokemon is not here 🍃</p>
    }


    return (
        <div className="details-card bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 max-w-sm w-full text-center">
            <div className="details-card--back">
                {/*button go back*/}
            </div>
            <div className="details-card--info">
                <section className="details-card--name text-2xl font-semibold text-gray-800">
                    <h2>{capitalizeFirstLetter(pkm.name)}</h2>
                </section>
                <section className="details-card--img h-40 flex justify-center">
                    <img src={pkm.image} alt={pkm.name}></img>
                </section>
                <section className="details-card--types flex flex-wrap justify-center gap-2 mt-2">
                    {pkm.types.map(t => <Badge key={t.name} type={t.name} />)}
                </section>
                <div className="details-card--stats w-full mt-4">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Stats</h3>
                    <section className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                        {pkm.stats.map((s) => (
                            <div
                                key={s.name}
                                className="flex justify-between px-2 py-1 bg-gray-50 rounded-md"
                            >
                                <span className="capitalize">{s.name}</span>
                                <span className="font-semibold text-gray-800">{s.base}</span>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )

};

export default DetailsCard;