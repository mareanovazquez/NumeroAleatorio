import { useEffect, useState } from "react";


export const NumeroAletorio = ()=> {

    const [numeroRandom, setNumeroRandom] = useState('')

    useEffect(() => {
        const numero = Math.floor(Math.random() * 100 + 1);
        let fecha = new Date();
        let dia = String(fecha.getDate()).padStart(2, '0');
        let mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript empiezan desde 0 (0 = enero, 1 = febrero, etc.), así que hay que sumar 1.
        let anio = fecha.getFullYear();
        let hora = String(fecha.getHours()).padStart(2, '0');
        let minutos = String(fecha.getMinutes()).padStart(2, '0');
        let segundos = String(fecha.getSeconds()).padStart(2, '0');
        let fechaFormatoNumerico = anio + mes + dia + hora + minutos + segundos;

        const numeroAleatorio = `${fechaFormatoNumerico}`+ '/' + numero ;

        setNumeroRandom(numeroAleatorio)
        
    }, []) 
    return (
        <>
        <h2> {numeroRandom}</h2>
        </>
    )
}