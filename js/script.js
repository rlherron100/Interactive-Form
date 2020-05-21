


function setFocusToNameBox(){                 //sets focus to the name box when page first loads
 document.getElementById('name').focus();
    
}
setFocusToNameBox();

// create input element underneath select and set it's display to none
// create if statement for if 'other' is selected, to change display of input to something like "if Other, please tell us what it is" or something like that
// if Element.value equals 'other' display input box else hide input box

// <input type="text" id="other-input"></input>





 const title=document.getElementById('title');

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

const selectDesign = document.createElement('OPTION');
selectDesign.classList.add('selectDesign');
const color = document.getElementById('color');
selectDesign.innerHTML="Please select a design option";
color.insertBefore(selectDesign, color.firstChild);
const colorOptions=color.children;

for (var i=0; i < color.length; i+=1){
    color[i].style.display='none';
  
}


// for (let i = 0; i <= color.length; i++){
//     document.getElementById('color')[i].style.display = 'none';
//   };



// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."