
//function for displaying value

function dis(val){
    document.getElementById('edu').value+=val;
}

//function for evaluation

function solve(){
   var x=document.getElementById('edu').value;
    var y=eval(x);
   document.getElementById('edu').value = y;

}

//function for clear display
function clr(){
    document.getElementById('edu').value=' ';
}
