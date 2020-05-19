


function setFocusToNameBox(){                 //sets focus to the name box when page first loads
 document.getElementById('name').focus();
    
}
setFocusToNameBox();

// create input element underneath select and set it's display to none
// create if statement for if 'other' is selected, to change display of input to something like "if Other, please tell us what it is" or something like that
// if Element.value equals 'other' display input box else hide input box

// <input type="text" id="other-input"></input>



 const other= document.getElementById('other-input');

 const title=document.getElementById('title');
 const basics=document.getElementById('basics');
         
x = document.createElement('INPUT');
x.classList.add('other');
basics.appendChild(x);
x.style.display='none';


    onchange= function changeToOther () {               //toggles an option text box when the 'other' drop down option is selected
     if (title.options[5].selected) { 
         x.style.display='block'
        }
     else {
         x.style.display='none'
        }
 };


