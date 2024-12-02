
import './Calculadora.css';
import { Boton } from './Boton';
import { useState } from 'react';
import Swicht from './Swicht';

const Calculadora = () => {
  const [data, setData] = useState({ operacion: '', resultado: '' });
  const [usandoResultado, setUsandoResultado] = useState(false); // Nuevo estado para controlar el uso del resultado

  const escritura = (event) => {
    const valor = event.target.innerText;
    const esOperacion = valor === '+' || valor === '-' || valor === '*' || valor === '/';

    if (data.operacion.length > 11) return;

    // Manejo del botón '+/-'
    if (valor === '+/-' && data.operacion === '') return;
    if (valor === '+/-' && data.operacion !== '') {
      if (data.operacion.startsWith('-')) {
        setData({ ...data, operacion: data.operacion.slice(1) });
      } else {
        setData({ ...data, operacion: `-${data.operacion}` });
      }
      return;
    }

    // Manejo de error: reemplazar "Error" con el nuevo valor
    if (data.operacion.includes('Error')) {
      setData({ ...data, operacion: valor });
      setUsandoResultado(false);
    } else if (usandoResultado && !esOperacion) {
      // Si se está usando el resultado y el valor no es una operación, empezar una nueva operación
      setData({ operacion: valor, resultado: '' });
      setUsandoResultado(false);
    } else {
      // Añadir el valor a la operación si no es '+/-' y no hay error
      setData({ ...data, operacion: data.operacion + valor });
      setUsandoResultado(false);
    }
  };

  const eliminar = () => {
    setData({ ...data, operacion: data.operacion.slice(0, -1) });
  };

  const limpiar = () => {
    setData({ operacion: '', resultado: '' });
    setUsandoResultado(false);
  };

  const resultado = () => {
    try {
      const resultado = eval(data.operacion);
      setData({ operacion: resultado.toString(), resultado: resultado.toString() });
      setUsandoResultado(true);
    } catch (error) {
      setData({ ...data, operacion: 'Error' });
      setUsandoResultado(false);
    }
  };

  return (
    <main>
      <Swicht/>
      <span className="resultado">{data.resultado}</span>
      <span className="display">{data.operacion || '0'}</span>
      <Boton texto='C' clase='gris' handleClick={limpiar} />
      <Boton texto='+/-' clase='gris' handleClick={escritura} />
      <Boton texto='%' clase='gris' handleClick={escritura} />
      <Boton texto='/' clase='operacion' handleClick={escritura} />
      <Boton texto='7' clase='numero' handleClick={escritura} />
      <Boton texto='8' clase='numero' handleClick={escritura} />
      <Boton texto='9' clase='numero' handleClick={escritura} />
      <Boton texto='*' clase='operacion' handleClick={escritura} />
      <Boton texto='4' clase='numero' handleClick={escritura} />
      <Boton texto='5' clase='numero' handleClick={escritura} />
      <Boton texto='6' clase='numero' handleClick={escritura} />
      <Boton texto='-' clase='operacion' handleClick={escritura} />
      <Boton texto='1' clase='numero' handleClick={escritura} />
      <Boton texto='2' clase='numero' handleClick={escritura} />
      <Boton texto='3' clase='numero' handleClick={escritura} />
      <Boton texto='+' clase='operacion' handleClick={escritura} />
      <Boton texto='.' clase='numero' handleClick={escritura} />
      <Boton texto='0' clase='numero' handleClick={escritura} />
      <Boton texto='<' clase='numero' handleClick={eliminar} />
      <Boton texto='=' clase='operacion' handleClick={resultado} />
    </main>
  );
};

export default Calculadora;