import React from "react";
import { useGetHeroes } from "../shared/hooks";
import "../assets/card.css";
const HeroCard = () => {
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
      <ul className="hero-list">
        {heroes.map((hero) => (
          <li key={hero.id} className="hero-card">
            <img src={hero.images.sm} alt={hero.name} />
            <h3>{hero.name}</h3>
            <p>ID: {hero.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroCard;
