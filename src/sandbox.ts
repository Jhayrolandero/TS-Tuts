// let greet: Function

// Example 1
let greet: (a: string, b: string) => void

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// Example 2 
let calc: (a: number, b: number, c: string) => number

calc = (n1: number, n2: number, action: string) => {
    if (action === 'add') {
        return n1 + n2
    } else {
        return n1 - n2
    }
}

// Example 3
type details = { name: string, age: number}

let logDetails: (obj: details ) => void

logDetails = (ninja: details ) => {
    console.log(`${ninja.name} is ${ninja.age}`)
}