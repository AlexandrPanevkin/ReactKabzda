import React, {useState} from 'react';
import './App.css';
import {Rating, RatingPropsType, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";


import {OnOff} from "./Components/OnOff/OnOff";
import { Accordion } from './Components/Accordion/Accordion';



function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] =useState<boolean>(false)
    const[on, setOn] = useState(false)
    return (
        <div className='App'>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'Barabarabara'}/>

            Article 1
            {/*<Rating value={0}/>*/}
            <Accordion titleValue={'Меню 1'} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)}/>
            {/*<Accordion titleValue={'Меню 2'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion titleValue={'Меню 1'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Меню 2'}/>*/}

            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            {/*<UncontrolledOnOff/>*/}
            <OnOff on={on} setOn={setOn} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
