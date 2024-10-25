let date = new Date

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo", ];

fullDate = `${days[date.getDay()]}, ${date.getDate()} de ${months[ date.getMonth()]} del ${date.getFullYear()}`;

document.getElementById("date").innerHTML = fullDate;
let hora = document.getElementById("our");

const addZero = (value) => {
    if (value >= 0 && value <=9){
        return `0${value}`;
    }else {
        return value;
    }
};

const xd = () => {
    let time = new Date
    hora.innerHTML= `${addZero( time.getHours())}:${addZero( time.getMinutes())}:${addZero( time.getSeconds())}`;
}

setInterval( xd,10)


