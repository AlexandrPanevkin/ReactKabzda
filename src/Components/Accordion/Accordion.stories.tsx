import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onClick={action('action event fired')}/>
export const UncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onClick={action('action event fired')}/>


export const ModeChanging = () =>{
    const[value, setValue]=useState(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onClick={()=>setValue(!value)}/>
}
