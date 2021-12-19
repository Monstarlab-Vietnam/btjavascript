// map example
var domain = [
    "longtk123", 
    "internship", 
    "monstarlab"
];
 
domain.map(function(item){
    console.log(item);
});
// filter example
var numbers = [1,2,3,4,5,6,7,8,9];
const evennumber = numbers.filter(num=>{return num %2 === 0});
console.log(evennumber);
// reduce example
const sumofnumbers = numbers.reduce(function(acc,currentval){
    return acc + currentval;
},0);
console.log(sumofnumbers);
// find example
const findnumbers = numbers.find(function(val){return val > 5});
console.log(findnumbers);
//some example
const isgreaterthanten = numbers.some(function(ele){
    return ele>10;
});
console.log(isgreaterthanten);
//Give an example for add a new element to an array[] (at the end)
var arr = [1,2,3];
arr.push(4);
console.log(array); 
//Give an example for add a new element to an array[] (at the beginning)
arr.unshift(0);
console.log(array);
//Give an example for removing an element in array[]
const index = arr.indexOf(3);
if(index > -1){
    arr.splice(index,1);
}
console.log(arr);
//1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumandtriple(val1, val2){
    if(val1 === val2){
        return val1*3;
    }
    else{
        return val1 + val2;
    }
}
console.log(sumandtriple(2,3));
//2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function diffofnineteen(num){
    return Math.abs(19-num);
}
console.log(diffofnineteen(22));
//3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
function findlossvalue(val){
    let result = [];
    for(let i = 1; i<=9;i++){
        let numval = val.replace("*",i);
        if(numval %3 == 0){
        result.push(numval);
    }       
    }
    return result;
}
​console.log(findlossvalue('1*9'));

//4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.
function findlossvalue2(val){
    let result = [];
    for(let i = 1; i<=9;i++){
        let numval = val.replace("*",i);
        if(numval %6 == 0){
        result.push(numval);
    }       
    }
    return result;
}
console.log(findlossvale2('1*9'));