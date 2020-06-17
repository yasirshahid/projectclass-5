import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child=()=>{
    let CounterValue=useContext(CounterContext);
    return(
        <div>
            <h1>
                This is a child 
            </h1>
            <h2>
                This is counter value {CounterValue}
            </h2>
        </div>
    );
}

export default Child;