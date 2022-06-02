
const donantes = [ 
    { name: 'Jesus' , age: 34 , city: 'Caracas', donation: 300 },
    { name: 'Valentina' , age: 23 , city: 'Maracay', donation: 700 },
    { name: 'Keiber' , age: 21 , city: 'Coro', donation: 500 },
    { name: 'Samuel' , age: 26 , city: 'Caracas', donation: 150 },
    { name: 'Xavier' , age: 28 , city: 'Maracaibo', donation: 1000 }
    ]

function donerByName( personaNombre ) {
    for (let donador of donantes) {
        if( donador.name == personaNombre ){
            return donador
        }
    }
    return 'No se encontro el donador ' + personaNombre 
}

const donators = ( monto ) => {
    let group = []
    for (let donador of donantes) {
        if( donador.donation <= monto ){
            group.push(donador)
        }
    }
    return group
}


const donated = donantes.filter( (donante) =>( donante.age >= 18 ) ? true : false )

console.log( donated )


//  Operador ternario ( condicion ) ? Si la condicion es true : condicion falsa) 


// //arrow function
// ( function(){

// } )();

//console.log( donated )
