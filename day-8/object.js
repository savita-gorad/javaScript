//what is object?
//object and array is refernce data type
//data structure:key value pair
//object property:name,age,qualification,eat
//object method:walking,readind,eating,talking
//object create method:
// 1. normal obj =>var x={};  2. new keyword=>var x=object();  
//3.object.create             4.object.assign
//object notation => 1.dot(.)  2. bracket[]


//Example-1
var person = {};       //key value are push in {}i.e name,age,number
person.name = 'savita';
person.age=28;
person.qualification='BE';
person.number=7387910488;
//console.log(person);

person.eat=function(){
   // console.log('person is eating');
}
 //console.log(person.eat()); 
//console.log(person);


//example-2
var person=Object();   //key value are pushed i.e name,age,gender
person.name='poonam';
person['age']=28;
person.qualification='BE';
person.number=8369986954;
person['gender']='female';
//console.log(person);

//example-3
var person2={
    name:'Riddhi',
    age:2,
    number:9860323263
} 
person2.height='160cm';  // externally push height data of person2
//console.log(person2);

//example-4
var car={
    model:'swift',
    price:750000
}
 var car1 = Object.create(car);    //for object create key and value is need then output is getting.
 var car2=Object.create(car1);
 //console.log(car1.model);         
car1.color='gray';
car1.avg='50km';
//console.log(car1);
//console.log(car2.__proto__);    //value is assign car2=car1

//example.5
var student={
    name:'vivek',
    rollNo:12,
    last2YearMark:function lastYearMark(a,b){
     result= (a + b)/2;
     return result;
     }
    }
   // console.log(student);
    //console.log(student.last2YearMark(80,90))

//object create methods
//1.normal object
var person={};
person.name= 'savita';
//console.log(person)

//2. new keyword
var stud=new Object();
stud.name="Rushi";
stud.rollNo=9;
console.log(stud)

//3.object.create
var car3=Object.create({company:'mahindra',color:'red'});
console.log(car3.__proto__);
car3.model="TUV 700";
console.log(car3['model']);



//4.object.assign
let per1={fname:'alexa'}
let per2={lname:'simi'}
//let per=Object.assign(per1,per2);
let per=Object.assign(per1,per2,{fullNm:'xyz'})  //we can add similer type of data in{} bracket like this.
console.log(per)