import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff on={true} setOn={action('button was clicked')}/>;
export const OffMode = () => <OnOff on={false} setOn={action('button was clicked')}/>;
export const ModeChanging = () =>{
    const[value, setValue]=useState(false)
    return <OnOff on={value} setOn={setValue}/>;
}
