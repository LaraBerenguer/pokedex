import type { Pokemon } from "../types/types";

interface StatsProps {
    pkm: Pokemon;
}

const Stats = ({ pkm }: StatsProps) => {
    return (
        <div className="w-full mt-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2 text-center">Stats</h3>
            <section className="flex flex-col gap-3">
                {pkm.stats.map((s) => {
                    const percent = Math.min((s.base / 150) * 100, 100);
                    let color = "bg-red-400";
                    if (percent > 70) color = "bg-green-400";
                    else if (percent > 50) color = "bg-yellow-400";
                    else if (percent > 30) color = "bg-orange-400";

                    return (
                        <div key={s.name}>
                            <div className="flex justify-between text-sm text-gray-700 mb-1">
                                <span className="capitalize">{s.name}</span>
                                <span className="font-semibold">{s.base}</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className={`h-full ${color} transition-all duration-500 ease-out`} style={{ width: `${percent}%` }} />
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Stats;
