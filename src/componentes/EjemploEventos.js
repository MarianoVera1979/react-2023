
import { useState } from "react";

export default function EjemploEventos () {

    const [numero, setNumero] = useState(0);
    const [mostrar, setMostrar] = useState (true);
    
    function sumar () {
        const nuevoNumero = numero + 10;
        setNumero(nuevoNumero);
    }

    return(
        <div>

            <h2>El numero es: {numero}</h2>
            <button onClick={sumar}> 
            
             Mostrar Magia  
            
            </button>

            {mostrar &&
                <p>Esta es la Magia!</p>
            }
        </div>
    )
}