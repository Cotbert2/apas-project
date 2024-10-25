import React from "react";
import  ReactDOM  from "react-dom/client";
import { RenderTask } from "./renderTask";

const generateId = (date) => {
    let id = `${date.getDay()}-${date.getFullYear()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`
    return id;
}

export const zero = (x) => {
    if (x >= 0 && x <= 10) {
        return `0${x}`;
    }else {
        return `${x}`
    }
}

export const hour = (date) =>  {
    return `${zero(date.getHours())}:${zero(date.getMinutes())}`;
}


const add = (a,b) => {
    let ab = (
        <div>
            {a}
            {b}
        </div>
    )
    return ab;
}

let renderer 

const rec = new window.webkitSpeechRecognition()

rec.lang = 'es-US';
rec.continuous = false;
rec.interimResults = false;

export const NewTask2 = ({cont, setStateFun}) => {
    return (
        
    <div>
    <div className="containe">
        <div className="new">
            <button className="save" id='listen' onClick={() => {
                alert('xd')
                rec.start();
                

                rec.onresult = (e) => {
                let res = window.event.results[0][0].transcript;
                document.getElementById('text').value = res;
                }

            }}>🎙️</button>
            <input type='textArea' placeholder="Inserte su tarea aquí" className="texta" id="text" onFocus={() => {
                     document.getElementById('text').addEventListener('keydown', (e) => {
                        if (e.key === 'Enter'){
                            document.getElementById('save').click()
                        } 
                     })   
        
            }}></input>
            <button id="save" className="save" onClick={() => {

               
                
                //

                

                let textAreaValue = document.getElementById('text').value
                
                if (textAreaValue.length > 0){
                    let date = new Date()
                    let hourNow = hour(date)
                    
                    let info = 
                        {
                            'day' : date.getDay(),
                            'date' : `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`,
                            'hour' : `${hourNow}`,
                            'content' : `${textAreaValue}`
                        }

                    //TODO: save data here
                    


                    document.getElementById('text').value = '';


                    renderer  = <div>{add(<RenderTask data={info}/>, renderer) } </div>
                    setStateFun(renderer);

                }else {
                    alert('Escribe algo primero :(');
                }
        }}>Guardar</button>
            </div>
        </div>
            <div>{cont}</div>
    </div>
    ) 
}
