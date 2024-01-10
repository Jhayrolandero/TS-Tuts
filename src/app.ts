// Interface

interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'Yasuo',
    age: 32,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('i spent', amount)
        return amount
    }
}

// let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
    console.log('Hello', person.name)
}

greetPerson(me)

import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice('Mario', 'Working', 250)
const invTwo = new Invoice('Luigi', 'Working', 350)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(
        type.value, 
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})