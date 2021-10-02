var test = ['Nitin', 'Mahesh', 'Shivani', 'Vishnu', 'Ashutosh', 'Nisha', 'Savita'];
//console.log(test);
//console.log(test[0]);                       //nitin will remove
//console.log(typeof(test[0]));               //nitin = string
//console.log(typeof(test));                     //object
//console.log(test.length);                       // length=7

//1.push
var test1=test.push('Rahul');
//console.log(test1);            //push will be add new element at the end of the array and
//console.log(test);             //it will gives length of the new array.

//2.pop
var test2=test.pop();      //last element of the array is removed and it will return that removed element.
//console.log(test2);

//3.Unshift
var test3=test.unshift('vivek');
//console.log(test3);              // new element is added at the start of an array. and
//console.log(test);                    // it will gives length of an new array.


//4.shift
var test4=test.shift();      //it will remove first element of array and it will return removed element.
//console.log(test4);

//5.slice
test5=test.slice(3,6);      
//console.log(test5);       //(start index,end index -1)
//console.log(test);     // slice is return new array of given start index and end index

//6.splice
test6 = test.splice(3,6,'Ashwini','Komal'); //splice gives 3 to 6 element with new array.
console.log(test6);                        //splice is used to add or remove element.
//console.log(test);    //this method will return removed elements. 
                  //o/p=> nitin,mahesh,shivani,ashwini,komal

//7.join
test7=test.join();    //join is convert array to string
//console.log(test7);

//8.concate
x=['chameli','megha'];
test8= test.concat(x);   //concate will combine two array and return new array with adding all element.
//console.log(test8);

//9.reverse
test9 = test.reverse();  //it will reverse all element of array.
//console.log(test9);

//10.combination of split and reverse
z ='claritech solution,pune';
test10= z.split('').reverse().join('');
//console.log(test10);

//11.to string
test11 = test.toString();    //conversion array to string
//console.log(test11);


//12.map
var s = [1,2,3,4,5];
test12 = s.map(item=> item + 5);  // output= 6,7,8,9,10
//console.log(test12);             //map will perform operation on all element and return new array.

//13.filter
var s=[1,2,3,4,5];
test13=s.filter(item=>item>2);  //filter can perform operation on all element and 
//console.log(test13);          // return element who can satisfy the condition.

//14.reduce
var test14 = s.reduce(function(res,item){
    return res+item;
} ,0);
console.log(test14);

