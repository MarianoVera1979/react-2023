import { useState } from "react";

export default function Contador() {

        /*
        Información general:
            - cantidad
            - precio unitario
            - total

        Información fija:
            - precio unitario

        Predeterminados:
            - cantidad: 0
            - precio_unitario: 500
            - total: 0
    */
            // Primer paso: Setear la cantidad y mostrarla en el párrafo
            // Memoria del componente
        
            // Segundo paso: Hacer andar el +
        
            // Tercer paso: Hacer andar el -
        
            // Cuarto paso: Mostrar el total

const precio_unitario = 500;

const [cantidad, setCantidad] = useState(0);

function aumentar () {

    
    setCantidad(cantidad + 1);
}

function restar () {
    if (cantidad > 0){setCantidad (cantidad - 1)}
    

}


  return (
    <div>
      <p>Precio Unitario : ${precio_unitario} </p>

      <div>
        <button onClick={ restar}>-</button>

        <p>{cantidad}</p>

        <button onClick={ aumentar}>+</button>
      </div>
      <p> Total: ${cantidad * precio_unitario}</p>

    </div>
  );
}
