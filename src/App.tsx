import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'Barabarabara'}/>
            Article 1
            <Rating value={0}/>
            <Accordion titleValue={'Меню 1'} collapsed={false}/>
            <Accordion titleValue={'Меню 2'} collapsed={true}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
