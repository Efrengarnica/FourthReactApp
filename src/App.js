import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';
import genereishopLogo from './imagenes/Genereishop1.png'
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='genereishop-logo-contenedor'>
        <img
        src={genereishopLogo}
        className='genereishop-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
