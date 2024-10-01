let salaries = {
    "John":200,
    "Pete":1900,
    "Mary":300,
};

const salaryStuff = [100, 200, 300, 1021, 3021,];

function sumSalaries(salaries){
    let sum = 0;

    for(let salary of Object.values(salaries)){
        sum += salary
    }
    return sum
}
console.log(sumSalaries(salaries))

// With Reduce

function sumSalariesWithReduce(salaries){
     return Object.values(salaries).reduce((a, b)=> a + b, 0)
}

console.log(sumSalariesWithReduce(salaries))


const salarySUm = salaryStuff.reduce((total, summ)=> {
    return total + summ
},)

console.log(salarySUm)