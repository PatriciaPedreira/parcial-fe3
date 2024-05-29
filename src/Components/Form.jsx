import { useState } from "react"; //No se había importado el useState
import Card from "./Card";

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: "",
        eleccion: ""
    });

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleNombre = (event) => setUsuario({ ...usuario, nombre: event.target.value });
    const handleEleccion = (event) => setUsuario({ ...usuario, eleccion: event.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (usuario.nombre.length > 3 && !usuario.nombre.startsWith(' ') && usuario.eleccion.length > 6 ){
            setShow(true);          //agregue la validacion de que no haya espacios en blanco al inicio
            setError(false);
        } else {
            setError(true);
            }
        };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu Nombre: </label>  {/*Había elegido onBlur en vez de onChange y no me escribía en los inputs, ni tomaba
                 la información. Si quería utilizar onBlur debía retirar el value */}
                <input type="text" value={usuario.nombre} onChange={handleNombre} /> {/*en el parcial el value={nombre} fue incompleto*/}
                <label>Ingresa tu animal favorito: </label>
                <input type="text" value={usuario.eleccion} onChange={handleEleccion} /> {/*en el parcial el value={eleccion} fue incompleto*/}
                <button>ENVIAR</button>
            </form>
    
            {show && <Card usuario={usuario}/> }

            {error && (
                <p style={{ color: "red" }}>Por favor chequea que la información sea correcta.</p>
            )}
        </>     
    );
};


export default Form;
