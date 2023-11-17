import { CSVWriter } from "./index";

interface Employee {
    id: number
    name: string
    role: string
    salary: number
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    { id: 1, name: 'dan', salary: 100000, role: 'Solutions Engineer' },
    { id: 2, name: 'waluigi', salary: 50000, role: 'Digital Manager' },
    { id: 3, name: 'toad', salary: 75000, role: 'Marketing Director' },
])