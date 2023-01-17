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
                name: `${'1'.blue}. Crear Tarea`,
            },
            {
                value:'2',
                name: `${'2.'.blue} Listar Tareas`,
            },
            {
                value:'3',
                name: `${'3.'.blue} Listar Tareas Completas`,
            },
            {
                value:'4',
                name: `${'4.'.blue} Listar Tareas Pendientes`,
            },
            {
                value:'5',
                name: `${'5.'.blue} Crear Tarea(s)`,
            },
            {
                value:'6',
                name: `${'6.'.blue} Listar Tareas`,
            },
            {
                value:'0',
                name: `${'0.'.blue} Salir`,
            },
        ]

    }
];


const inquirerMenu = async() =>{

    // console.clear();
    console.log('==========================='.blue);
    console.log('   Seleccione una opción   '.white);
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

const leerInput = async(message) => {

    const question = [

        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }

    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
}