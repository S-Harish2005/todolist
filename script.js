const inputbox=document.getElementById("input_box");
const task=document.getElementById("task");
function addtask(){
  if(inputbox.value===''){
    alert("YOU MUST ENTER SOMETHING!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    task.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputbox.value='';
  savedata();
}

  task.addEventListener("click",function(e){
    if(e.target.tagname==="li"){
      e.target.classList.toggle("checked");
      savedata();    
    }
    else if(e.target.tagname==="span"){
      e.target.parentElement.remove();
      savedata();
    }

  }, false);
function savedata(){
  localStorage.setItem("data",task.innerHTML)
}
function showtask(){
  task.innerHTML=localstorage.getiTem("data");
}
showtask();


