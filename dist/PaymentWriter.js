"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 40, to: 'mario', notes: 'for pizza' },
    { id: 3, amount: 25, to: 'peach', notes: 'clearing a debt' }
]);
paymentWriter.save('./data/payments.csv');
