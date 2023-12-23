import React, {useState} from "react";

const MeuComponente = () => {
    const [contador, setContador] = useState(0);


    const incrementarContador = () => {
        setContador(contador + 1);
    }

    return (
        <div>
            <h2>Meu Componente</h2>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Clicar</button>
        </div>
    );
}    

export default MeuComponente