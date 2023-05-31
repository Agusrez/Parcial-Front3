import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import './App.css'

function App() {
  
  const [cancion, setCancion] = useState('')
  const [artista, setArtista] = useState('')
  const [album, setAlbum] = useState('')
  const [color, setColor] = useState('white')
  const [show, setShow] = useState(false)
  const [fail, setFail] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(cancion.length > 3 && cancion.charAt(0) !== ' ' && artista.length > 6) {
      setShow(true)
    } else {
      setFail(true)
    }
  }

  return (
    <>
      
      <Form handleSubmit={handleSubmit} setCancion={setCancion} setArtista={setArtista} setAlbum={setAlbum} setColor={setColor} />

      {fail && <p className="error">“Por favor chequea que la información sea correcta”</p>}
      {show && <Card cancion={cancion} artista={artista} album={album} color={color} />}
    </>
  );
}

export default App;
