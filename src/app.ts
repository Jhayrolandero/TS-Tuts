//  Classes
class invoice {
    readonly client: string
    private details: string
    amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new invoice('Mario', 'Working', 250)
const invTwo = new invoice('Luigi', 'Working', 350)

let invoices: invoice[] = []
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