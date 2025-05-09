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

    return (
        <div>
            <h1>Dashboard de Héroes</h1>
            <ul>
                {heroes.length > 0 ? (
                    heroes.map(hero => (
                        <li key={hero.id}>
                            <h3>{hero.name}</h3>
                            <p>{hero.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No hay héroes disponibles.</p>
                )}
            </ul>
        </div>
    );
};
