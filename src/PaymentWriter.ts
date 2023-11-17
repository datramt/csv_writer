
import { CSVWriter } from "./index"

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

//type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'mario', notes: 'for pizza'},
    { id: 3, amount: 25, to: 'peach', notes: 'clearing a debt'}
]) 

paymentWriter.save('./data/payments.csv')  