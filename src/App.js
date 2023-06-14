import './App.css';
// 1. Importamos el componente
// Si lo tenemos abierto en otra pestaña VSCode nos ayuda a completarlo
import Title from './componentes/Title';
import CardWrapper from './componentes/CardWrapper';

function App() {
  const numeros = [45, 76, 23, 670, 3, 78];

  // JSX
  return (
    <div className="App">
      {/* 2. Lo usamos */}
      <Title nombre="Mariano!" />
      <CardWrapper />

      {numeros.map(numero => {
        // Procesamos el número antes de mostrar el dato
        const precio = numero * 0.9;
        const id = Math.random();

        return (
          <p key="id">El precio con 10% off es: {precio}</p>
        )
      })}
      
      Hola mundo  
    </div>
  );
}

export default App;
