var a=0;
//display.innerHTML=localStorage.getItem("data");
var date=document.getElementById("mydate");
var input=document.getElementById('myinput');
function getAndUpdate(){
    title = input.value;
    const dateshow=new Date(date.value);
    let d=dateshow.getDate();
    let m=dateshow.getMonth();
    let y=dateshow.getFullYear();
    if(title===''){
        alert("Write Something!");
    }
    else if (date.value=='') {
        alert("Please enter date!...");    
    }
    else{
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([title,d,m,y]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([title,d,m,y]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
  
  let list = document.getElementById("myid");
  let str = "";
  itemJsonArray.forEach((element, index) => {
      str += `<div class="block">
      <p id="display">
      ${element[0]}
      </p>
      <p id="datedisplay" class="date">
        ${element[1]}/${element[2]}/${element[3]}</p>
       <img src="delete.png" onclick="deleted(${index})">
        </div> `; 
  });
  list.innerHTML = str;
  input.value='';
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();


function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}
var list = document.querySelector("#myid");
var p=document.getElementById("display")
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'P') {
        ev.target.classList.toggle('checked');
      }
}, false);
