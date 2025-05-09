import { useEffect, useState } from "react";
import { getHeroes as getHeroesRequest } from "../../services/api";

export const useGetHeroes = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHeroes = async () => {
            try {
                const response = await getHeroesRequest();
                console.log(response);  

                if (response && response.data && Array.isArray(response.data.data)) {
                    setHeroes(response.data.data);
                } else {
                    throw new Error("La respuesta no contiene un array de héroes válido.");
                }
            } catch (error) {
                setError(error.message || "Error desconocido al cargar los héroes.");
            } finally {
                setLoading(false);
            }
        };

        getHeroes();
    }, []);

    return {
        heroes,
        loading,
        error
    };
};
