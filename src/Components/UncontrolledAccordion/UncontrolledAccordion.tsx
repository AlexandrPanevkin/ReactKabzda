import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    function toggleCollapsed () {
            setCollapsed(!collapsed)

    }
    return <div>
        <AccordionTitle title={props.titleValue} onClick={toggleCollapsed}/>
        {collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;