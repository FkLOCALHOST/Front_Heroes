import React from 'react'

export const Content = ({ heroes }) => {
  if (!heroes || heroes.length === 0) {
    return <div className="content">No hay heroes disponibles</div>
  }

  return (
    <div className="content">
      <h2>Heroes List</h2>
      <ul className="hero-list">
        {heroes.map((hero) => (
          <li key={hero.id} className="hero-item">
            <strong>{hero.name}</strong> - {hero.description || 'No description'}
          </li>
        ))}
      </ul>
    </div>
  )
}