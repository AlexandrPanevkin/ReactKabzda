import React from "react";

type ItemType = {
    value: any
    title: string
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
    items: ItemType[]
}

export function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={(e)=>props.onClick()}>{props.title}</h3>
    );
}

type AccordionBodyType = {
    items: ItemType[]
}

const AccordionBody: React.FC<AccordionBodyType> = ({items}) => {

    return (
        <ul>
            {items.map(i=><li key={i.value}>{i.title}</li>)}
        </ul>
    );
}

