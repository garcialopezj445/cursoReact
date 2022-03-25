import { React, useState, useLayoutEffect, useEffect } from 'react'

const LayoutEffect = () => {
    const [data, setData] = useState([]);
    const [lenght, setLenght] = useState(0);

    const newData = [
        {
            name: "jhon",
            email: "jhon@mail.com"
        },
        {
            name: "jhon",
            email: "jhon@mail.com"
        },
        {
            name: "jhon",
            email: "jhon@mail.com"
        },
        {
            name: "jhon",
            email: "jhon@mail.com"
        }  
    ];

    useEffect(() => {
      setTimeout(() => {
        setData(newData)
      }, 5000)
    }, [newData]);
    

    useLayoutEffect(() => {
        const tam = data.length
        setLenght(tam);
    }, [])
    
    const efecto = data.length;

    return (
        <>
            <h1>useLayoutEffect</h1>
            <hr />
            <p>valores {lenght}</p>
        </>
    )
}

export default LayoutEffect