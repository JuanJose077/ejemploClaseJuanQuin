var array;
function cargarPagina(){
    array =[
        {nombre:"Juan",codigo:"192103",doc:"12345",prog:"Ing De Sistemas"},
        {nombre:"Wilder",codigo:"192104",doc:"54321",prog:"Ing De Sistemas"},
        {nombre:"Pedro",codigo:"192105",doc:"67890",prog:"Ing De Sistemas"}
    ];
    
    console.log(array);
}

function calcular(){
    var nombre= $("#nombre").val();
    for(i = 0; i < array.length ; i++){
        if(array[i].nombre==nombre){
            console.log("Usuario encontrado");
            break;
        }else{
            console.log("No se ha encontrado");
        }

    }
    
}
