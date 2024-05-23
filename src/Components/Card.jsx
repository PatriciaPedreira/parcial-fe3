const Card = ({usuario}) => {
  return (
    <div>
      <h1>Hola, {usuario.nombre}!</h1>
      <h3>Sabemos que tu animal fávorito es:</h3>
      <button>{usuario.eleccion}</button>
    </div>
  );
};

export default Card;
