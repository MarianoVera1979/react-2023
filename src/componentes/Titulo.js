
import './Titulo.css';

export default function Titulo({nombre}){

    /* const nombre = 'Mariano' */
    return (
        <h1 className="titulo">Bienvenido, {nombre}!</h1>
    )
}