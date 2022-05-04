import React, { useEffect, useState } from "react";

export default props => {
    const [ cont, setCont] = useState(100)
    const [ status, setStatus] = useState('Par')

    useEffect(()=> {
        cont % 2 === 0 ? setStatus('Par') : setStatus('Impar')
    })

    return (
        <div>
            <h1> { cont }</h1>
            <h3>{ status }</h3>
            <button onClick={() => setCont(cont - 1)}>Dec</button>
            <button onClick={() => setCont(cont + 1)}>Inc</button>
        </div>
    )
}