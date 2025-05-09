
import React, { useState } from 'react';
// import { useState } from 'react';

function StateLearn(){

        // const name = 'krishnan';
    const [name, setname] = useState('krishnan');
    return (
        <>
            <h1>My Name is {name}</h1>
            <button onClick={() => {setname('Ram')}}>Change Name</button>
        </>
    )
}

export default StateLearn;