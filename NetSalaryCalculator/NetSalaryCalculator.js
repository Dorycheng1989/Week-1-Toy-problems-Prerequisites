//STEP 1 input
alert('please input the values as Numbers')
let benefits=parseInt(prompt('Enter your Benefits'))
let salary=parseInt(prompt('Enter total annual Salary'))
let nssf=parseInt(prompt('Enter your nssf deductions'))


let grossSalary=benefits+salary
console.log('Your benefits are: ',benefits)
console.log('Your Salary is: ',salary)
// console.log('Your NSSF deductions are: ',nssdeductions)

function calculateGrossSalary(salary,benefits){
    let grossSalary=0;
    return grossSalary=salary+benefits;
}
function calcuteTaxRate(grossSalary){
let taxRate=0;
if(grossSalary>0&&grossSalary<=288000){
    return taxRate=0.01
}else if(grossSalary>288000&&grossSalary<= 388000){
 return taxRate=0.25;
}else {
    return taxRate=0.30
}
}

function calculateNSSF(salary){
    let nssf=salary*0.06
    if(nssf>0&&nssf<=72000){
        return `Your  deductions are ${nssf} and Your are in Tire I`
    }
   return nssf
}

console.log(calcuteTaxRate(400000))
let Rate=(calcuteTaxRate(60000))

//calculating PAYE
let PAYE=grossSalary*Rate
let netIncome=grossSalary-PAYE-nssf

console.log('Your net Income is',netIncome)
console.log('Your PAYE IS',PAYE)
console.log('Your nssf is',nssf)