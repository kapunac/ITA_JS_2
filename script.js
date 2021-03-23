let display = document.getElementById('display');
let lastResult = document.getElementById('resultNumber');

let buttons = Array.from(document.querySelectorAll('.btn')); // Forming array so we can easly map through it

console.log(buttons);

buttons.map( btn => {
    btn.addEventListener('click' ,(e) => { // Adding event listener CLICK to all element instead of getting it one by one
        switch(e.target.innerText){ // Getting condition based on InnerText of an element
            case 'CA':
                display.innerText = '';
                break;
            case '=':
                try{
                    let calculation = eval(display.innerText); // eval will calculate anything written in display automatically
                    display.innerText = calculation;
                    lastResult.innerText = calculation;
                } catch{
                    display.innerText = '';
                    lastResult.innerText = 'Error!'; // If try fails, it will display error in last result display and reset the display
                }

                break;
            default:
                display.innerText += e.target.innerText; // By default, it will write everything clicked
        } 
    })
})