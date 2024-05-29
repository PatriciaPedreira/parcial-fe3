import './App.css'
import Form from './Components/Form';

function App() {
  
  return (
    <div className="App">
      <h1>Elige tu animal favorito</h1>
      <Form/>  {/* Sólo debía renderizarse Form en App */}
      {/* <Card/> ---> NO debía ir aquí, Form ya controla el renderizado de Card*/}
    </div>
    );

}

export default App;
