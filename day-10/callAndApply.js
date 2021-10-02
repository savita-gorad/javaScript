//this. using function
var stud={
    fname:'alexa',
    lname:'simi',

    getFullName:function(){
        var FullName=this.fname + ' ' + this.lname;
        //console.log(FullName);
    }
}
stud.getFullName();
//console.log(stud);

//call and apply
var student={
    fname:'smith',
    lname:'john',
    getFullName:function(){
        var FName=this.fname +' '+ this.lname;
       return FName;
    } 
}
var gethobbies=function(hobby1,hobby2){
console.log(this.getFullName()+ '  is hobbies like '+  hobby1 + ' and '+  hobby2);
}

gethobbies.call(student,'reading','travling'); 
gethobbies.apply(student,['reading','traveling']);


//example-2 of call and apply
    
var gethobbies=function(hobby1,hobby2){
 // console.log(' A person is hobbies like this '+  hobby1 + ' and '+  hobby2);
}
gethobbies.call('reading','traveling');
gethobbies.apply(['reading','traveling']);
