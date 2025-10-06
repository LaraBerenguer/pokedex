import { useEffect, useState } from "react";

interface rawTypes {
    name: string,
    url: string
}

export function useType() {
    const [types, setTypes] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch("https://pokeapi.co/api/v2/type/");
                if (!response.ok) throw new Error(`Error fetching pokémon types! Try again`);
                const data = await response.json();

                const allTypes = data.results.map((type: rawTypes) => type.name);
                setTypes(allTypes);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("Error loading pokémon types");
                }
                console.error("Error processing pokémon types", err);

            } finally {
                setLoading(false);
            }
        };

        fetchTypes();
    }, []);

    return { types, loading, error };
}
