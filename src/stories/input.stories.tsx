import React, {ChangeEvent, useRef, useState} from 'react';
import './button.css';
import {OnOff} from "../Components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    // component: OnOff
}

export const UncontrolledInput = () => <input/>

export const TrackedValueOfUncontrolledInput = () => {
   const[value, setValue]=useState('')
   return <><input onChange={(event)=>{
   const actualValue = event.currentTarget.value
       setValue(actualValue)
   }
   }/> - {value}</>
}

export const TrackedValueOfUncontrolledInputByButton = () => {
    const[value, setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () =>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} /><button onClick={save}>ADD</button> - {value}</>
}

export const ControlledSelect = () => {
    const[value, setValue]=useState('1')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) =>{

        setValue(e.currentTarget.value)
    }

    return<select value={value} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">London</option>
    </select>
}



export const ControlledInput = () => <input value={'it'} />