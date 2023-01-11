import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const selectedItems = props.items.find(i => i.value === props.value)

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const onClickHandler = () => setActive(!active)
    const onItemClickHandler = (newTitle: string) => {
        props.onChange(newTitle)
        onClickHandler()
    }
    const onMouseEnterHandler = (hoveredValue: string) => {
        setHoveredElementValue(hoveredValue)
    }
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItems) {
                props.onChange(props.items[0].value)
            }

        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyDown={onKeyDownHandler} tabIndex={0}>
            <span className={s.main} onClick={onClickHandler}>{selectedItems && selectedItems.title}</span>
            {active &&
                <div className={s.items}>{props.items.map(el => <div onMouseEnter={() => onMouseEnterHandler(el.value)}
                                                                     className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                                                                     onClick={() => onItemClickHandler(el.value)}
                                                                     key={el.value}>{el.title}</div>)}</div>}

        </div>
    );
};