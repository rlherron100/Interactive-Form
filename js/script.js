


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
const color = document.getElementById('color');
const colorOptions=color.children;
const design = document.getElementById('design');
selectDesign.classList.add('selectDesign');
selectDesign.innerHTML="Please select a design option";
color.insertBefore(selectDesign, color.firstChild);


// for (var i=0; i < color.length; i++){
//     color[i].style.display='none';
//     if (i != 7){color.options[i].selected=false
//     } else {
//         color.options[i].selected=true
//     }
// }
// for (var i=0; i<color.length; i ++) {
    
//     if (color.options[i].innerText.includes('please')) 
//     {color[i].style.display='block'; 
//     color.options[7].selected=true;
//     }  else 
//     {color[i].style.display = 'none'
// }
// }

for (var i=0; i < color.length; i++) {
    if (design[i] === 0) {
        color.options[0].selected=true;
        color.options[1,2,3,4,5,6].selected=false
} else if (design[i] <4 && design.options[i] > 0) {
    color.options[i].style.display='block';
    color.options[0,5,6].style.display='none';
}
else {
    color.options[i].style.display='block';
    color.options[0,1,2,3,4].style.display='none';
}
}




// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."