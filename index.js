// Write your solution in this file!
const employee = {
    name: "Garrus Vakarian",
    address: "Normandy SR-2"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    const noEmployee = {...employee};
    noEmployee[key] = value;
    return noEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee
}