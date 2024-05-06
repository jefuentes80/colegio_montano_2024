let Tabla_de_datos = document.querySelector(".Tabla_de_datos");
document.querySelector(".btn").addEventListener("click",cargar_datos);


Tabla_de_datos.innerHTML= `
        <div class="titulo">Tabla de costos</div>
        <div >Servicio</div>
        <div >Costo sin %</div>
        <div >Costo con %</div>
        <div >Costo total</div>
        <div class="resultados"></div>
    
    `;

/* DATOS */
let servicios = [
    {
        nombre: "Comida",
        costo: 33.5,
        porcentaje_extra: 0.05
    },
    {
        nombre: "Bebidas",
        costo: 11.45,
        porcentaje_extra: 0.07
    },
    {
        nombre: "Decoración",
        costo: 3.5,
        porcentaje_extra: 0.02
    }
]

/* FUNCIÓN CALCULAR */
function cargar_datos(){

    let personas = document.querySelector(".entrada_numero").value;


    let div_cargar = document.querySelector(".resultados");
    div_cargar.innerHTML = "";
    let total = 0;
    let costosin = 0;
    let costocon = 0;

    servicios.forEach((elemento)=>{



        let div = document.createElement("div");
        div.innerHTML=`
        <di>${elemento.nombre}</di>
        <div>Q ${elemento.costo*personas}</div>
        <div>${(elemento.costo * elemento.porcentaje_extra)}</div>
        <div>${total}</div>
        `;
        div_cargar.appendChild(div);

    })

}