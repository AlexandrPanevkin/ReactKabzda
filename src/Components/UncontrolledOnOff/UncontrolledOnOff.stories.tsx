import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callBack=action('button clicked')

export const OnMode = () => <UncontrolledOnOff defaultValue={true} onChange={callBack}/>;
export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callBack}/>;
