
const funcion = async()=>{
    let div = document.createElement("DIV");
    div.classList.add("container");
    document.body.appendChild(div);
    try {
        let data = await fetch("info.txt");
        let info = await data.json();
        // await no trabaja con .then, por lo tanto se usa try catch.


        let a =info.aprobados;
        let r=info.reprobados;

        let HTML=`Cantidad de Aprobados: ${a} <br>
        Cantidad de Reprobados: ${r}`;

        div.innerHTML = HTML;
    }catch(e){
        let error=document.querySelector(".container");
        error.style.background = "#FFF0F9";
        error.style.color = "#7B1832";
        div.innerHTML = "La API ha fallado.";
    }
    
}

document.querySelector(".btn").addEventListener("click", funcion);