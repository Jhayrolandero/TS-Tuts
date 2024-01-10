// Interface
const me = {
    name: 'Yasuo',
    age: 32,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i spent', amount);
        return amount;
    }
};
// let someone: IsPerson;
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'Working', 250);
const invTwo = new Invoice('Luigi', 'Working', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
