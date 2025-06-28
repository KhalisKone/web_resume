import React, { useState } from "react";
import './App.css';
import Accueil from "./components/Accueil";
import Methodologie from "./components/Methodologie";
import Resultats from "./components/Resultats";
import Visualisations from "./components/Visualisations";
import Conseils from "./components/Conseils";

const App: React.FC = () => {
  const [page, setPage] = useState<string>("accueil");
  return (
    <div className="App">
      <header>
        <h1>Résumé Analyse Jardin Connecté</h1>
        <nav>
          <button onClick={() => setPage("accueil")}>Accueil</button>
          <button onClick={() => setPage("methodo")}>Méthodologie</button>
          <button onClick={() => setPage("resultats")}>Résultats</button>
          <button onClick={() => setPage("visualisations")}>Visualisations</button>
          <button onClick={() => setPage("conseils")}>Conseils</button>
        </nav>
      </header>
      <main>
        {page === "accueil" && <Accueil />}
        {page === "methodo" && <Methodologie />}
        {page === "resultats" && <Resultats />}
        {page === "visualisations" && <Visualisations />}
        {page === "conseils" && <Conseils />}
      </main>
    </div>
  );
};

export default App;
