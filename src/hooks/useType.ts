import { useEffect, useState } from "react";
import { typeService } from "../services/typeService";

export function useType() {
    const [types, setTypes] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                setLoading(true);
                setError("");

                const allTypes = await typeService.fetchTypes();
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
