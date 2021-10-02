//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2022 12:00:00 UTC";
//var mycookie= document.cookie;
//data=[1,2,3];
//console.log(mycookie);

//2.local Storage:
data="CTS pune";
localStorage.setItem('companyName',data);
var result=localStorage.getItem('companyName');

localstorage.removeItem('companyName');            //for removing added item(key,value)
console.log(result);

//3.session storage:
data1='angular';
sessionStorage.setItem('className',data1);
res = sessionStorage.getItem('className');
console.log(res);



