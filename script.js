const inpuTag=document.getElementById('inputTag');
function display(value){
    inpuTag.value+=  value; 
}
function calaculate(){
   try{
    inpuTag.value=eval(inpuTag.value)
   }
   catch{
    inpuTag.value='Syntax Error';   

   }
}

function backSpace(){
   console.log("Hi");
let valuee=inpuTag.value.slice(0,-1);
inpuTag.value=valuee;
   
}
function clearInputs(){
    inpuTag.value=' ';
}
