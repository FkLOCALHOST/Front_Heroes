import React, { useState } from 'react';
import { useGetHeroes } from '../shared/hooks';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/heroe.css";

export const HeroesCard = () => {
    const { heroes, loading, error } = useGetHeroes();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) return <div className="loading">Cargando héroes...</div>;
    if (error) return <div className="error">Error al cargar los héroes: {error}</div>;
    if (!heroes || !Array.isArray(heroes)) return <div className="error">No se pudo cargar la lista de héroes.</div>;

    const filteredHeroes = heroes.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="hero-container">
            <h1>Lista de Héroes</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar héroe por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <ul className="hero-list">
                {filteredHeroes.length > 0 ? (
                    filteredHeroes.map(hero => (
                        <li key={hero.id} className="hero-card">
                            <p className="hero-id">ID: {hero.id}</p>
                            <img src={hero.images.sm} alt={hero.name} className="hero-img" />
                            <h3 className="hero-name">{hero.name}</h3>
                            <button className="hero-button" onClick={() => navigate(`/heroe/${hero.id}`)}>
                                Ver Detalle
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="no-results">No se encontró ningún héroe.</p>
                )}
            </ul>
        </div>
    );
};
