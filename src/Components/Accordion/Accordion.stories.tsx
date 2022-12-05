import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Components/Accordion',
    component: Accordion
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

const callbacksProps = {
    titleValue: 'Menu',
    onClick: action('action event fired')
}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbacksProps,
    collapsed: true,
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    ...callbacksProps,
    collapsed: false,
}


export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onClick={() => setValue(!value)}/>
}
