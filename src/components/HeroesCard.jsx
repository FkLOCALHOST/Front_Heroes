import React from 'react';
import { useGetHeroes } from '../shared/hooks';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/heroe.css"
export const HeroesCard = () => {
    const { heroes, loading, error } = useGetHeroes();
    const navigate = useNavigate();

    if (loading) {
        return <div>Cargando héroes...</div>;
    }

    if (error) {
        return <div>Error al cargar los héroes: {error}</div>;
    }

    if (!heroes || !Array.isArray(heroes)) {
        return <div>Error: No se pudo cargar la lista de héroes.</div>;
    }

    return (
        <div>
            <h1>Dashboard de Héroes</h1>
            <ul className='hero-list'>
                {heroes.length > 0 ? (
                    heroes.map(hero => (
                        <li key={hero.id} className='hero-card'>
                            <img src={hero.images.sm} alt="" />
                            <h3>{hero.id}</h3>
                            <h3>{hero.name}</h3>
                            <button onClick={() => navigate(`/heroe/${hero.id}`)}>
                                Ver Detalle
                            </button>
                        </li>
                    ))
                ) : (
                    <p>No hay héroes disponibles.</p>
                )}
            </ul>
        </div>
    );
};
