require('colors');

const mostrarMenu = () => {

    return new Promise (resolve => {

        console.clear();
        console.log('==========================='.blue);
        console.log('   Seleccione una opción   '.blue);
        console.log('===========================\n'.blue);
    
        console.log(`${'1.'.blue} Crear Tarea`);
        console.log(`${'2.'.blue} Listar Tareas`);
        console.log(`${'3.'.blue} Listar Tareas Completas`);
        console.log(`${'4.'.blue} Listar Tareas Pendientes`);
        console.log(`${'5.'.blue} Completar Tarea(s)`);
        console.log(`${'6.'.blue} Borrar Tarea`);
        console.log(`${'0.'.blue} Salir \n`);
    
    
        //INTERFASE PARA MOSTRAR Y RECIBIR INFO DEL USUARIO
        const readline = require('readline').createInterface({//recibiendo info del usuario
             input: process.stdin, //input de tipo process.stdin
             output: process.stdout// out para mostrar mensaje en consola
        })
    
        readline.question('Seleccione una opcion: ',(opt) => { //MOSTRAR informacion AL USER con la pregunta
            readline.close(); //cerramos el readline para no seguir esperand info del usuario
            resolve(opt);
        })


    });

}

    const pausa = () =>{

        return new Promise (resolve => {
            
            const readline = require('readline'). createInterface({
                input: process.stdin,
                output: process.stdout
           })
       
           readline.question(`\nPresione ${'ENTER'.red} para continuar\n`,(opt) => { 
               readline.close(); 
               resolve();
       
           })


        })


    }

module.exports ={
    mostrarMenu,
    pausa
}