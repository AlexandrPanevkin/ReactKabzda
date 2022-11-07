import React, {useState} from "react";


function Rating() {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button onClick={() => {
                setValue(1)
            }}>+
            </button>
            <Star selected={value > 1}/>
            <button onClick={() => {
                setValue(2)
            }}>+
            </button>
            <Star selected={value > 2}/>
            <button onClick={() => {
                setValue(3)
            }}>+
            </button>
            <Star selected={value > 3}/>
            <button onClick={() => {
                setValue(4)
            }}>+
            </button>
            <Star selected={value > 4}/>
            <button onClick={() => {
                setValue(5)
            }}>+
            </button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean

}

const Star = (props: StarPropsType) => props.selected ? <span><b>Star </b></span> :
    <span>Star </span>


export default Rating;