import React, { useState } from "react";


function ArrayComponent() {
    const [Datas, setDatas] = useState([
        'test1',
        'test2'
    ])
    const [count, setcount] = useState(Datas.length)
    
    function addItems() {
        const vall = setDatas((previos)=>{
            return [...previos, 'test'+(count + 1)]
        });        
        setcount(count + 1)
    }

    return <>
        <ul>
            {
                Datas.map((vale, index) => {                    
                    return <li key={index}>{vale}</li>
                })
            }
            <button onClick={addItems}>Submit</button>
        </ul>
    </>
}
export default ArrayComponent