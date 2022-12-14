import React, {useRef, useState} from 'react';
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



export const ControlledInput = () => <input value={'it'} />