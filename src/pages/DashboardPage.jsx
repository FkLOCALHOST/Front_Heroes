import React from 'react';
import { useGetHeroes } from '../shared/hooks';

export const DashboardPage = () => {
    const { heroes, loading, error } = useGetHeroes();

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
            <ul>
                {heroes.length > 0 ? (
                    heroes.map(hero => (
                        <li key={hero.id}>
                            <img src={hero.images.sm} alt="" />
                            <h3>{hero.id}</h3>
                            <h3>{hero.name}</h3>
                        </li>
                    ))
                ) : (
                    <p>No hay héroes disponibles.</p>
                )}
            </ul>
        </div>
    );
};
