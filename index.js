let showCase = document.getElementById('display');
let buttonHouse = Array.from(document.getElementsByClassName('button'));


buttonHouse.map(button => {
   button.addEventListener(`click`, (event) => {
    // console.log(`clicked`);
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
      switch(event.target.innerText) {
        case 'C': 
            showCase.innerText = '';
            break;
        case '←':
            if(showCase.innerText) {
                showCase.innerText = showCase.innerText.slice(0, -1);
            }
            break;
        case '=':
            try{
                showCase.innerText = eval(showCase.innerText);
            }catch{
                showCase.innerText = 'Error! :(';
            }
            break;
        default:
            showCase.innerText += event.target.innerText;
      }
    
   });
});