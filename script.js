let nums=document.querySelectorAll(".an");
let msg=document.querySelector("#show");
let result=document.querySelector("#equal");
let clear=document.querySelector("#ac");
let cl=document.querySelector("#bs");
console.log(nums);
let reStr="";
nums.forEach((num)=>{
    num.addEventListener("click",()=>{
        reStr= reStr+ num.innerText;
        msg.innerText=reStr;
       // console.log(reStr);
    });
});
result.addEventListener("click",()=>{
    let finalVal=eval(reStr);
    //console.log(finalVal);
    msg.innerText=finalVal;
    reStr=""+finalVal;
});

clear.addEventListener("click",()=>{
    reStr="";
    msg.innerText="";
});

cl.addEventListener("click",()=>{
   reStr=reStr.slice(0,length-1);
   msg.innerText=reStr;
});

