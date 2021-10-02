

function AddData(event){
event.preventDefault();
var Row=' ';
var fName=document.getElementById('fname').value;
var lName =document.getElementById('lname').value;
var Email=document.getElementById('email').value;
for(i=0;i<10;i++){
    
}

Row+='<tr> <td>' +fName+'</td> <td>'+lName+'</td> <td>'+Email+'</td>  </tr>';
$(Rows).appendTo('#list tbody');

}
