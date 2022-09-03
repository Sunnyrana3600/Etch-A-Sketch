
let color='white';
let board=document.querySelector('.board');
let allDivs=board.querySelectorAll('div');







function createGrid(){
    allDivs=board.querySelectorAll('div');
    allDivs.forEach(div=> div.remove());
    let input=prompt("Enter a number between 2 and 100.")
    input=parseFloat(input);
    while(input<2||input>100){
        input=prompt("Error-Enter a number between 2 and 100.")
        input=parseFloat(input);
    }

    
    

    //Creates Grid;
    board.style.gridTemplateColumns=`repeat(${input},1fr)`;
    board.style.gridTemplateRows=`repeat(${input},1fr)`;

    for(i=0;i<input*input;i++){
        square=document.createElement('div');
        square.setAttribute('style', 'border: 1px solid black;background:white');
        square.addEventListener('mouseover',gridColor);
        board.insertAdjacentElement('beforeend',square);
    }
    
}

function gridColor(){
    if (color==='random'){
        this.style.backgroundColor= Math.floor(Math.random()*16777215).toString(16);

    }
    else{
        this.style.backgroundColor=color;
    }

    
}

function colorChoice(choice){
    color=choice;
}

function reset(){
     allDivs=board.querySelectorAll('div');
     allDivs.forEach(div=>div.style.backgroundColor = "white")
     color='white';
   

}




createGrid();


















