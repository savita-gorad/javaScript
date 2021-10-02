
// callBack==>Calling a function from another function.

console.log('hello this first line to be execution');
console.log(' hello this second line  to be execution');

//syntax
// setTimeout(function, time in milisecond);
//Asyncronous functionality:
//Multiple events at a time. Or execution will not stop for any perticular event of piece of code.
setTimeout(()=>{
    console.log('this message will execute after 5sec');
}, 5000);

console.log(' hello this third line  to be execution');

function addNo(a,b){
    result= a + b;
    return result;
  // console.log(result);
}
console.log(' hello this fourth line  to be execution');
console.log(' hello this fifth line  to be execution');

function add(){
    var x=addNo(2,4);     //it can call above function i.e line no 17 addNo() and value is passed in that
    console.log(x);
} add();