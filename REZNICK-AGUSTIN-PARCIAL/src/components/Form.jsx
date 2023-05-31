import React from 'react'

const Form = ({setCancion, setArtista, setAlbum, setColor, handleSubmit}) => {
return (
    
    <form onSubmit={handleSubmit} className='formulario'>
        <h1 className='titulo'>Ingresa la información de tu música favorita:</h1>
        <label className='labels'>Cancion favorita:</label>
        <input className='inputs' type="text" onChange={(e) => setCancion(e.target.value)} />
        <label className='labels'>Artista favorito:</label>
        <input className='inputs' type="text" onChange={(e) => setArtista(e.target.value)} />
        <label className='labels'>Album favorito:</label>
        <input className='inputs' type="text" onChange={(e) => setAlbum(e.target.value)} />

        <label className='labels'>Color favorito:</label>
        <select className='select' onChange={(e) => setColor(e.target.value)} >
            <option value="white">Ninguno</option>
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
            <option value="purple">Violeta</option>
            <option value="brown">Marrón</option>
        </select>
        <button className='boton'>Enviar</button>
    </form>
)
}

export default Form