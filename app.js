const gridCont = document.getElementById('grid-container');

gridCont.addEventListener('click', () =>{
    if(event.target.className === 'grid-item'){
        event.target.style.backgroundColor = selected.style.backgroundColor;
    }
});