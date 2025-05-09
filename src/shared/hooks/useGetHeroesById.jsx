import { useState, useEffect } from "react";
import { getHeroesById as getHeroesByIdRequest } from "../../services/api";

const useGetProducto = (id) => {
    const [heroes, setHeroes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHeroesById = async () => {
            try {
                const response = await getHeroesByIdRequest(id);

                if (response.error || !response.success || !response.heroes?.length) {
                    throw new Error("No se encontró el héroe.");
                }
                setHeroes(response.heroes[0]);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        getHeroesById();
    }, [id]);

    return { heroes, loading, error };
};

export default useGetProducto;