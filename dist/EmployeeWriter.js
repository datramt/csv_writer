"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'dan', salary: 100000, role: 'Solutions Engineer' },
    { id: 2, name: 'waluigi', salary: 50000, role: 'Digital Manager' },
    { id: 3, name: 'toad', salary: 75000, role: 'Marketing Director' },
]);

employeeWriter.save('data/employees.csv')