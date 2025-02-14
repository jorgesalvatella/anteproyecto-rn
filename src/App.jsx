import React, { useState } from 'react';
import { FcPlus } from 'react-icons/fc'; // Importar el nuevo icono FcPlus

import Header from './components/Header';
import Footer from './components/Footer';
import Objetivos from './components/Objetivos';
import Estructura from './components/Estructura';
import Metodologia from './components/Metodologia';
import Duracion from './components/Duracion';
import Indicadores from './components/Indicadores';
import Recursos from './components/Recursos';
import Confetti from 'react-confetti';

// Importar el archivo de estilos
import './styles/styles.css';

// Importar las imágenes para cada sección
import targetImage from '/images/objetivos.webp';
import flowchartImage from '/images/estructura.webp';
import peopleWorkingImage from '/images/metodologia.webp';
import clockImage from '/images/duracion.webp';
import trophyImage from '/images/indicadores.webp';
import toolsImage from '/images/recursos.webp';

function App() {
  // Estado para manejar la visibilidad del contenido en cada tarjeta
  const [toggleObjetivos, setToggleObjetivos] = useState(false);
  const [toggleEstructura, setToggleEstructura] = useState(false);
  const [toggleMetodologia, setToggleMetodologia] = useState(false);
  const [toggleDuracion, setToggleDuracion] = useState(false);
  const [toggleIndicadores, setToggleIndicadores] = useState(false);
  const [toggleRecursos, setToggleRecursos] = useState(false);
  const [showConfettiEffect, setShowConfettiEffect] = useState(false); // Agregar el estado para manejar el confetti

  // Función para activar el confeti por un largo periodo de tiempo
  const showConfetti = () => {
    setShowConfettiEffect(true);
    setTimeout(() => setShowConfettiEffect(false), 15000); // Aquí el confeti durará 15 segundos
  };

  return (
    <div className="App">
      <Header />
      
      <div className="main-content">
        {/* Objetivos Específicos */}
        <div className="card" onClick={() => setToggleObjetivos(!toggleObjetivos)}>
          <h3>
            Objetivos 
            <span className={`toggle-arrow ${toggleObjetivos ? 'open' : 'closed'}`}> 
              {toggleObjetivos ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleObjetivos && <img src={targetImage} alt="Objetivos" className="card-image" />}
          {toggleObjetivos && <Objetivos />}
        </div>

        {/* Estructura del Programa */}
        <div className="card" onClick={() => setToggleEstructura(!toggleEstructura)}>
          <h3>
            Estructura  
            <span className={`toggle-arrow ${toggleEstructura ? 'open' : 'closed'}`}>
              {toggleEstructura ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleEstructura && <img src={flowchartImage} alt="Estructura del programa" className="card-image" />}
          {toggleEstructura && <Estructura />}
        </div>

        {/* Metodología */}
        <div className="card" onClick={() => setToggleMetodologia(!toggleMetodologia)}>
          <h3>
            Metodología 
            <span className={`toggle-arrow ${toggleMetodologia ? 'open' : 'closed'}`}>
              {toggleMetodologia ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleMetodologia && <img src={peopleWorkingImage} alt="Metodología" className="card-image" />}
          {toggleMetodologia && <Metodologia />}
        </div>

        {/* Duración del Programa */}
        <div className="card" onClick={() => setToggleDuracion(!toggleDuracion)}>
          <h3>
            Duración  
            <span className={`toggle-arrow ${toggleDuracion ? 'open' : 'closed'}`}>
              {toggleDuracion ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleDuracion && <img src={clockImage} alt="Duración del programa" className="card-image" />}
          {toggleDuracion && <Duracion />}
        </div>

        {/* Indicadores de Éxito */}
        <div className="card" onClick={() => setToggleIndicadores(!toggleIndicadores)}>
          <h3>
            Indicadores  
            <span className={`toggle-arrow ${toggleIndicadores ? 'open' : 'closed'}`}>
              {toggleIndicadores ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleIndicadores && <img src={trophyImage} alt="Indicadores de éxito" className="card-image" />}
          {toggleIndicadores && <Indicadores />}
        </div>

        {/* Recursos Necesarios */}
        <div className="card" onClick={() => setToggleRecursos(!toggleRecursos)}>
          <h3>
            Recursos 
            <span className={`toggle-arrow ${toggleRecursos ? 'open' : 'closed'}`}>
              {toggleRecursos ? '▲' : <FcPlus />}
            </span>
          </h3>
          {!toggleRecursos && <img src={toolsImage} alt="Recursos necesarios" className="card-image" />}
          {toggleRecursos && <Recursos />}
        </div>
      </div>

      <div className="confetti-button">
          <button 
            onClick={() => {
              window.scrollTo(0, 0); // Esto hará que la página haga scroll hacia arriba
              showConfetti(); // Luego, activamos el confetti
            }}
          >
            <span role="img" aria-label="Confetti celebration">
                ¡Me gusta la propuesta! 🎉
              </span>
          </button>
       </div>

{/* Mostrar confeti si el estado lo permite */}
{showConfettiEffect && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <Footer />
    </div>
  );
}

export default App;





