import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../assets/sidebar/sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside>
      <div className="menu-header">
        <span className="menu-icon" role="img">⚡</span>
        <span className="menu-title">Menú</span>
      </div>
      <nav>
        <a onClick={() => navigate('/heroes')}><span role="img" aria-label="heroes">🛡️</span> Héroes</a>
        <a onClick={() => navigate('/villanos')}><span role="img" aria-label="villanos">☠️</span> Villanos</a>
        <a onClick={() => navigate('/masculinos')}><span role="img" aria-label="masculinos">👨</span> Masculinos</a>
        <a onClick={() => navigate('/femeninos')}><span role="img" aria-label="femeninos">👩</span> Femeninos</a>
      </nav>
    </aside>
  );
};

export default Sidebar

