import { HasFormatter } from '../interfaces/HasFormatter.js'

//  Classes
export class Payment implements HasFormatter{
    readonly recipient: string
    private details: string
    amount: number

    constructor(c: string, d: string, a: number) {
        this.recipient = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}