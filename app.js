const gridCont = document.getElementById('grid-container');
const colorMenu = document.getElementById('color-menu');
const grids = document.getElementsByClassName('grid-item');
const resetButton = document.getElementById('reset-button');
let selected = 'black';

gridCont.addEventListener('click', () =>{
    if(event.target.className === 'grid-item'){
        event.target.style.backgroundColor = selected;
    }
});

colorMenu.addEventListener('click', () =>{
    if(event.target.className === 'color-grid-item'){
        document.getElementById(selected).style.border = "";
        selected = '';
        event.target.style.border = "7px solid gold";
        selected = event.target.id;
        console.log(event.target);
    }
});

resetButton.addEventListener('click', () =>{
    for(i = 0; i < grids.length; i++){
        grids[i].style.backgroundColor = 'white';
    }
});