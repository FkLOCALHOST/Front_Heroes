import { useState, useEffect } from "react";
import { getHeroesById as getHeroesByIdRequest } from "../../services/api";

export const useGetHeroesById = (id) => {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHeroDetails = async () => {
            try {
                const response = await getHeroesByIdRequest(id);
                console.log('Response from API:', response);

                if (response?.data?.heroeDetails) {
                    setHero(response.data.heroeDetails);
                } else {
                    throw new Error("No se encontró el héroe.");
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        getHeroDetails();
    }, [id]);

    return { hero, loading, error };
};
