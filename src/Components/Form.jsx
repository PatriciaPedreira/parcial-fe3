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
        if (usuario.nombre.length > 3 && usuario.eleccion.length > 6 ){
            setShow(true);
            setError(false);
        } else {
            setError(true);
            }
        };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Ingresa tu Nombre: </label>
                <input type="text" value={nombre} onBlur={handleNombre} />
                <label>Ingresa tu animal favorito: </label>
                <input type="text" value={eleccion} onBlur={handleEleccion} />
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
