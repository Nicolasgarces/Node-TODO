const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
         type: 'list',
         name: 'opcion',
         message: '¿Qué desea hacer?',
         choices: [
            {
                value:'1',
                name:'1. Crear Tarea',
            },
            {
                value:'2',
                name:'2. Listar Tareas',
            },
            {
                value:'3',
                name:'3. Listar Tareas Completas',
            },
            {
                value:'4',
                name:'4. Listar Tareas Pendientes',
            },
            {
                value:'5',
                name:'5. Crear Tarea(s)',
            },
            {
                value:'6',
                name:'6. Listar Tareas',
            },
            {
                value:'0',
                name:'0. Salir',
            },
        ]

    }
];


const inquirerMenu = async() =>{

    // console.clear();
    console.log('==========================='.blue);
    console.log('   Seleccione una opción   '.blue);
    console.log('===========================\n'.blue);

   const {opcion} = await inquirer.prompt(preguntas)

    return opcion;
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.blue} para continuar`
        }
    ];

    await inquirer.prompt(question);
}


module.exports = {
    inquirerMenu,
    pausa
}