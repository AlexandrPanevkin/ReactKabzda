import React, {useState} from 'react';

type PropsType = {
    on: boolean
    setOn:(on:boolean)=>void
}

export function OnOff(props:PropsType) {

    const onStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : "white",
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : "red",
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '15px',
        backgroundColor: props.on ? 'green' : "red",
        cursor: 'pointer'
    }

    return <div>
        <div style={onStyle} onClick={()=>props.setOn(true)}>On</div>
        <div style={offStyle} onClick={()=>props.setOn(false)}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}