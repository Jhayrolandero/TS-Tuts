import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'


const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

// List template

const ul = document.querySelector('ul')!
const List = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter

    if(type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    List.render(doc, type.value, 'end')
})


const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)

    return {...obj, uid}
}

let docOne = addUID({ name: 'Yoshi', age: 40})


console.log(docOne.name)

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// Interface 
interface Resource<T> {
    uid: number
    resourceName: ResourceType;
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: 'Nani???'
}

const docFour: Resource<String[]> = {
    uid: 2,
    resourceName: ResourceType.FILM,
    data: ['Okay', 'Demacia!!!']
}

console.log(docThree, docFour)
