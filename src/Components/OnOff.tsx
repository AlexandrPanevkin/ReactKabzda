import React, {useState} from 'react';



export function OnOff() {

    let[on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : "white",
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : "red",
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '15px',
        backgroundColor: on ? 'green' : "red",
        cursor: 'pointer'
    }

    return <div>
        <div style={onStyle} onClick={()=>setOn(true)}>On</div>
        <div style={offStyle} onClick={()=>setOn(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}