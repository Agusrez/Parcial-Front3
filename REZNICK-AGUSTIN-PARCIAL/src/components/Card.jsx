//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({cancion, artista, album, color}) {
  return (
    <div className="container">
      <h2 className="info">Tu cancion favorita es {cancion}, </h2>
      <h2 className="info">tu artista favorito es {artista},</h2>
      <h2 className="info"> tu album favorito es {album}, </h2>
      <div className='colorin' style={{backgroundColor: color}} >
        <h2 className="info2">y tu color favorito es el que ves acá, que no tiene nada que ver con la música pero no sabía que más poner.</h2>
      </div>
    </div>
  );
}

export default Card;
