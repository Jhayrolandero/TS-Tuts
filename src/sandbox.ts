let greet: Function

greet = () => {
    console.log('Hello, Nigar')
}

let add: Function

add = (a: number, b: number, c?: number | string): void => {
    console.log(a + b)
}
    

add(2,2, 3)


let minus: Function

minus = (a: number, b: number): number => {
    return a - b
}

let result: number = minus(10, 5)