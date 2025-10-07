import type { Pokemon } from "../types/types";
interface StatsProps {
    pkm: Pokemon;
}

const Stats = ({ pkm }: StatsProps) => {
    return (
        <>
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
                ))
                }
            </section>

        </>
    )
};

export default Stats;