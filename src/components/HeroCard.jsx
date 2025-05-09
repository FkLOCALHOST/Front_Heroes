import React from "react";
import PropTypes from "prop-types";
import { useGetHeroes } from '../shared/hooks';

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
      <ul>
        {heroes.length > 0 ? (
          heroes.map((hero) => (
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

HeroCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  onVerMas: PropTypes.func.isRequired,
};

export default HeroCard;
