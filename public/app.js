"use strict";
//  Classes
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new invoice('Mario', 'Working', 250);
const invTwo = new invoice('Luigi', 'Working', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
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
