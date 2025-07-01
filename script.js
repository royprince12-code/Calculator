const disp=document.querySelector("#user-text")

displayval=(val)=>{
    disp.innerText += val;
}
calculate=()=>{
    let result=eval(disp.innerText);
    disp.innerText = result;
}
cleardisplay=()=>{
    disp.innerText = " ";
}

deldisplay=()=>{
    let del=disp.innerText.slice(0,-1);
    disp.innerText=del;
}