import React, {useState}  from "react";
import  ReactDOM  from "react-dom/client";

//Components
import {  NewTask2} from './newTask';
import { RenderTask} from './renderTask'
//Tarea

const rootElement = ReactDOM.createRoot(document.getElementById('root'));



const serverIsWorking = () => {
    const request = {
        method : 'GET'
    }
    fetch('http://localhost:8080/api/isworking')
    .then(response => response.json())
    .then(data =>  alert(data.id));
};




const Body = () => {
    serverIsWorking();
    const [content , addTask] = useState(<></>)
    return (
        <NewTask2 cont={content} setStateFun = {addTask}   />)
    }
    
    
rootElement.render(
    <>
        <Body/>
    </>

);