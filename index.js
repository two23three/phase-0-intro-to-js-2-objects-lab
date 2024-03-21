// Write your solution in this file!const 
let employee ={
    name:"Tulley",
    streetAddress:"1st Avenue",

}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {...employee,...{[key]: value} }
    
}
employee=updateEmployeeWithKeyAndValue(employee,"streetAddress", '2nd Avenue');
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,  key, value){
    employee[key]= value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","zach")
console.log(employee);

function deleteFromEmployeeByKey(employee,key){
   const newEmployee={...employee};
   delete newEmployee[key];
   return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

