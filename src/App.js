import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {

  /* Spread Operator */
  const arrList = [1, 2, 3, 4, 5]
  console.log(...arrList)

  /* Propiedades dinámicas */
  

  return (
    <div className='w-screen h-screen bg-gray-600 back'>
      <NavBar />
    </div>
  );
}

export default App;
