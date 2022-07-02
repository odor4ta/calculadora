import './App.css';
import tatiLearnLogo from './imagenes/tatilearn-logo.png'

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
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
