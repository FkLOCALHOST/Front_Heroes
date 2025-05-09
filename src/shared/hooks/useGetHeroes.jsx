import { useEffect, useState } from "react";
import { getHeroes as getHeroesRequest } from "../../services/api";

export const useGetHeroes = () => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const getHeroes = async() =>{
            try{
                const response = await getHeroesRequest();
                if(response.error){
                    throw new Error(response.message);
                }
                setHeroes(response.heroes); 
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
            getHeroes();
        }
    }, [])
    return{
        heroes,
        loading,
        error
    }
}
