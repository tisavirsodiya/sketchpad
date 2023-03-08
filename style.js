function maketable(){
    var table= document.getElementById('tab');
    var row= document.getElementById('rows').value; 
    var col= document.getElementById('cols').value; 

    console.log(row+" "+col);
    for(var rowindex =0; rowindex<row; rowindex++){
    var tr = document.createElement('tr');

    for(var colindex =0; colindex<col; colindex++){
        var td =document.createElement('td');
        var text=document.createTextNode(" ");
        document.getElementById('rows').value ="  "; 
        document.getElementById('cols').value ="  "; 
        td.appendChild(text);
        tr.appendChild(td);
    }
       table.appendChild(tr);
    }

}
document.getElementById('make').addEventListener("click",maketable);

// add color 

let colorPicker=document.getElementById('colorPicker')
let selectedColor;
colorPicker.addEventListener('change',(e) =>{
    selectedColor=e.target.value

} )
//hover effect
let item=document.querySelectorAll(".td")
console.log("fffff".td)
item.forEach(function(x){
  x.addEventListener("mouseover",(e)=>{
    
        e.target.style.backgroundColor= selectedColor;
      
      
    })
  })
  
  // onclick  eraser
  
  
  //   function clear()
  //  let eraser =document.getElementById("eraser")
  //  let eitem=document.querySelectorAll(".grid-item")
  //  eeraseritem.forEach(function (e){
  //    e.addEventListener("click",(i)=>{
  //     i.target.style.backgroundColor="white"
  
  //   })
  // })
  
  // clear();