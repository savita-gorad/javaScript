

//string==>l
var test="claritech solution,pune"
console.log(test);                            //claritech solution,pune 
//methods
//1. typeof
console.log(typeof(test));                    //string
//2.valueOf
console.log(test.valueOf());               //claritech solution,pune 

//3.charAt
var test1=test.charAt(21);
console.log(test1);           /*output= n ==>letter n will print from pune  i.e 21 no letter 
                             including space and coma it will empty if length and index are not match.*/

  //4.length
 console.log(test.length);    //it will define length of string.   output=>23
  
  //5.charCodeAt:
  var x = test.charCodeAt(10);
  console.log(x);                //will return ASCII value of character

  //6.concatination
  test2=test+'  software company';  //it gives output as claritech solution,pune(space) software company
  console.log(test2);

  //7.indexOf
  xyz=test.indexOf('mumbai');    //it gives start index of string or char;
  console.log(xyz);            //if it is available in the string otherwise this will return -1.

  //8.replace
  test3=test.replace('pune','mumbai')  // will replace the char or word if found inside series of string 
 console.log(test3);                     //otherwise it will gives the original string.
  
  //9.search
  console.log('xxxxxxxx');
  //console.log(test); 
  test4=test.search('mumbai');         // will return start index of search string =>19
  console.log(test4);               //if found in original string otherwise it will gives -1.

  //10.slice
  var test5=test.slice(3,5);       //slice(start index, end index -1)  output=>ri
  console.log(test5);         // will return new string depending upon start index and end index minus 1

  //11.split
  test6=test.split('pune');      // will return new array depending on provided condition ,
  console.log(test6);            //and that condition will be removed from  new array.
                                      //output=>['claritech solution','' ] pune will be removed from array
 

  //12.substr                 //substring
 test7=test.substr(3,5);     //it will consider 3 as  first start index and 5 as length.
 console.log(test7);         ///output=>ritc     from claritch 
 
 //13.uppercase
 test8=test.toLocaleUpperCase();
// console.log(test8);             //it will print  string in upper case 

//Example
var t='i am savita';
h=t.slice(3,5);
//console.log(h);     // o/p ==> m ==>start index,end index-1;

var g=t.split('savita');
console.log(g);          

    var f=t.substr(3,5);
    console.log(f);