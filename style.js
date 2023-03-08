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
// // colorpicker
// let colorinput=document.queryselector('#color');

// colorinput.addEventListener(() =>{
//     let color = colorinput.value;
//  document.body.style.backgroundcolor = color;
// });



// const cols =parseInt( prompt("Enter number of columns:"));

// const gridContainer = document.querySelector("#grid-container");

// for(let j=0;j<cols;j++){
//    gridContainer.style.gridTemplateColumns += " 1fr"
// }
// // create grid based on user input
// for (let i = 0; i < cols*cols; i++) {
   
//   const gridItem = document.createElement("div");
//   gridItem.classList.add("grid-item");
//   gridItem.textContent = i + 1;

//   gridContainer.appendChild(gridItem);
// }


// add color 
const stack=[];

let colorPicker=document.getElementById('colorPicker')
let selectedColor;
colorPicker.addEventListener('change',(e) =>{
    selectedColor=e.target.value

} )
//hover effect
let item=document.querySelectorAll(".grid-item")
item.forEach(function(x,i){
  x.addEventListener("mouseover",(e)=>{
     //black color logic
    // console.log(stack,"st1 ")
    if(stack.length>9){
        let j=0;
        let itemToeDarken;
        while(j<9){
          itemToeDarken=stack.shift();
          console.log(itemToeDarken,"st222")
          itemToeDarken.style.backgroundColor="black";
          j++
        }
      }
      if(selectedColor){
        e.target.style.backgroundColor= selectedColor;
      stack.push(x)
      }
      
    })
  })
  
  // onclick  eraser
  
  
    function clear()
   let eraser =document.getElementById("eraser")
   let eitem=document.querySelectorAll(".grid-item")
   eeraseritem.forEach(function (e){
     e.addEventListener("click",(i)=>{
      i.target.style.backgroundColor="white"
  
    })
  })
  
  clear();