import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
import es from "dayjs/locale/es.js";
dayjs.locale(es);


 function handleSubmit (event){
    event.preventDefault();
    console.log("Hola mundo");
    }
    
    const $form = document.querySelector("form");
    $form.addEventListener("submit", handleSubmit);




function humanize(dates){
    const now = dayjs()

    if(now.diff(dates, "year") < 1 && now.diff(dates, "month") >= 1){
        return "Publicado " + dayjs().format("MMMM DD");
    }
    else if(now.diff(dates, "year") > 1){
        return "Publicado " + dayjs().format("MMMM DD, YYYY");
    }
    else{
    return "Publicado " + now.to(dates);
    }
}

const fechaElement = document.getElementById("fecha");
const fecha = dayjs("2023-04-01T16:32:00");
const fechaHumana = humanize(fecha);
fechaElement.innerHTML = fechaHumana;

console.log(fecha);
