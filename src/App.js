import './App.css';
import tatiLearnLogo from './imagenes/tatilearn-logo.png'
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='tatilearn-logo-contenedor'>
        <img
          src={tatiLearnLogo}
          className='tatilearn-logo'
          alt='Logo de tati learn' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
