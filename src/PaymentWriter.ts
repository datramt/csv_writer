
import { CSVWriter } from "./index"

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'mario', notes: 'for pizza'}  
]) 

writer.save('./data/payments.csv')