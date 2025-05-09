import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetHeroesById } from "../shared/hooks";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "../assets/styles/herosDatails/hero.css"
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const HeroeDetalle = () => {
    const { id } = useParams();
    const { hero, loading, error } = useGetHeroesById(id);
    const navigate = useNavigate();

    console.log("hero:", hero); 

    if (loading) {
        return <div>Cargando información del héroe...</div>;
    }

    if (error) {
        return <div>Error al cargar el héroe: {error}</div>;
    }

    if (!hero) {
        return <div>No se pudo encontrar el héroe.</div>;
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
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="container">
            <div className="hero-header">
                <h1>{hero.name} (ID: {hero.id})</h1>
            </div>

            <div className="hero-details">
                <div className="hero-left">
                    <img src={hero.image.url} alt={hero.name} style={{ width: "100%", maxWidth: "300px", height: "auto" }} />
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
                    <div style={{ width: "100%", maxWidth: "500px", marginBottom: "30px" }}>
                        <Line data={data} />
                    </div>

                    <button onClick={() => navigate("/")} style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                        Regresar al Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};
