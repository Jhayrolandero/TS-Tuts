// Explicit Types
let character: string 
let age: number
let isLoggedIn: boolean


// Arrays
let ninjas: string[] = []

ninjas.push('adas')

// Union Types

let mixed: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(30)
mixed.push(false)

// Objects
let ninjaOne: object
ninjaOne = { name: 'Mario', age: 30 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'Yasuo',
    age: 32,
    beltColor: 'White'
}