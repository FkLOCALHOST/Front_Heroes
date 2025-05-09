import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetHeroesById } from "../shared/hooks";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "../assets/styles/herosDatails/hero.css";

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const HeroeDetalle = () => {
    const { id } = useParams();
    const { hero, loading, error } = useGetHeroesById(id);
    const navigate = useNavigate();

    if (loading) {
        return <div className="loading">Cargando información del héroe...</div>;
    }

    if (error) {
        return <div className="error">Error al cargar el héroe: {error}</div>;
    }

    if (!hero) {
        return <div className="error">No se pudo encontrar el héroe.</div>;
    }

    const data = {
        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
        datasets: [
            {
                label: "Powerstats",
                data: [
                    hero.powerstats.intelligence,
                    hero.powerstats.strength,
                    hero.powerstats.speed,
                    hero.powerstats.durability,
                    hero.powerstats.power,
                    hero.powerstats.combat,
                ],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: "y", // Hacer las barras horizontales
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Estadísticas de Poder del Héroe",
            },
        },
    };

    return (
        <div className="hero-container">
            <div className="hero-header">
                <h1>{hero.name} (ID: {hero.id})</h1>
            </div>

            <div className="hero-details">
                <div className="hero-left">
                    <img src={hero.image.url} alt={hero.name} className="hero-img" />
                    <h3>Biografía:</h3>
                    <p>
                        <strong>Full Name:</strong> {hero.biography["full-name"]}
                    </p>
                    <p>
                        <strong>First Appearance:</strong> {hero.biography["first-appearance"]}
                    </p>
                    <p>
                        <strong>Place of Birth:</strong> {hero.biography["place-of-birth"]}
                    </p>
                </div>

                <div className="hero-right">
                    <h3>Apariencia:</h3>
                    <p><strong>Gender:</strong> {hero.appearance.gender}</p>
                    <p><strong>Race:</strong> {hero.appearance.race}</p>
                    <p><strong>Height:</strong> {hero.appearance.height.join(" / ")}</p>
                    <p><strong>Weight:</strong> {hero.appearance.weight.join(" / ")}</p>
                    <p><strong>Eye Color:</strong> {hero.appearance["eye-color"]}</p>
                    <p><strong>Hair Color:</strong> {hero.appearance["hair-color"]}</p>

                    <h3>Powerstats:</h3>
                    <div className="hero-chart">
                        <Bar data={data} options={options} />
                    </div>

                    <button onClick={() => navigate("/")} className="btn-back">
                        Regresar al Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};
