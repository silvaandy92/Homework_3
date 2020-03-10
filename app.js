let start = Number(prompt('Enter the start:'));

if ((start === 0) || (isNaN(start))) {
    alert('Invalid integer input, please reload and try again');
} 

let end = Number(prompt('Enter the end:'));

if ((end === 0) || (isNaN(end))) {
    alert('Invalid integer input, please reload and try again');
} 

let step = Number(prompt('Enter the step:'));

if ((step === 0) || (isNaN(step))) {
    alert('Invalid integer input, please reload and try again');
} 

function range () {
    if (start>end) {
        step = +step;
    } else if (start<end) {
        step = step;
    }
    
    
    var length = Math.floor(Math.abs((end - start) / step)) + 1;
    return Array.from(Array(length), (x, index) => start + index * step);
}
console.log(`The generated array is ${range(start,end, step)}`);

const numbers = (range(start,end, step)); 
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
    }

             
console.log(`The sum of array elements is ${sum}`);

function num2bin(num){
    return (num >>> 0).toString(2);
}

for (let index = 0; index < numbers.length;index++){
    console.log(`The binary absolue elements values are ${num2bin(numbers[index])}
`)
}