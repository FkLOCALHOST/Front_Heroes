import { useEffect, useState } from "react";
import { getHeroes as getHeroesRequest } from "../../services/api";

const useGetHeroes = () => {
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
            const interval = setInterval(getHeroes, 5000)
            return () => clearInterval(interval)
        }
    }, [])
    return{
        heroes,
        loading,
        error
    }
}