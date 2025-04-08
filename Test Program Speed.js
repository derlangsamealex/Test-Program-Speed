var btn=[],textarea=[],code,stop=false;
var counter=0,t1;
var str,date;
var correctTime;
window.onload=function() {
    textarea[0]=document.createElement("textarea");
    btn[0]=document.createElement("div");
    textarea[1]=document.createElement("textarea");
    textarea[2]=document.createElement("textarea"); //just to correct time
    code=document.createElement('code'); // doesnt work 
    textarea[1].appendChild(code);
    document.body.appendChild(textarea[0]);
    document.body.appendChild(btn[0]);    
    document.body.appendChild(textarea[1]);
    btn[0].classList.add("button");
    btn[0].innerHTML="calculate";
    textarea[0].classList.add("input");
    textarea[1].classList.add("result");
    textarea[1].disabled=true;
    btn[0].addEventListener("click",testFunction,false);
};
function testFunction() {
    btn[0].style.borderStyle="inset";
    btn[0].removeEventListener("click",testFunction,false);   
    date=Date.now();
    count();
}
function showResult() {
    date=Date.now()-date;
    textarea[1].value=1e3/(date-2*correctTime)+"x/ms";
    counter=0;
    btn[0].style.borderStyle="outset";
    btn[0].addEventListener("click",testFunction,false);  
}     
function synError(error) {
    textarea[1].value=error;    
    counter=0;
    btn[0].style.borderStyle="outset";
    btn[0].addEventListener("click",testFunction,false);  
}
function count() {
    for(let i=0;i<=1e03;i++) {      
        eval(textarea[2].value);
    }
    correctTime=Date.now()-date;
    for(let i=0;i<=1e03;i++) {
        try{
            eval(textarea[0].value);
        }
        catch(error) {
            console.error(error);
            synError(error);
            return;
        }
    }
    showResult();
}