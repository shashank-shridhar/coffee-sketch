// Sketchboard layout:- Grid of cells with a border of 1 px. Users should be able to select the size of their sketchboard. 


let gridContainer = document.querySelector('#grid'); 
for(let i=0;i<128;i++)
{
let cell = document.createElement("div");
const list = cell.classList;
list.add('gridCell');
gridContainer.appendChild(cell); 
}//create 16 div elements and append them to the container



