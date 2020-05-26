


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

const selectDesign = document.createElement('OPTION');      //creates an option element
const color = document.getElementById('color');             //creates variable named 'color' with the value of the color selection
const design = document.getElementById('design');           //creates variable named 'design' with the value of the design selection


selectDesign.classList.add('selectDesign');     
selectDesign.innerHTML="Please select a design option";
color.insertBefore(selectDesign, color.firstChild);
design.options[0].selected=true;


for (let i=1; i < color.options.length; i++) {
if (design.options[0].selected=true) { 
    color.options[0].selected=true; 
    color.options[i].style.display='none';
}

}

onchange = function changeDesignOptions () {
    
        if (design.options[1].selected) {
            color.options[1].selected=true;
            color.options[0].style.display='none';
            color.options[4].style.display='none';
            color.options[5].style.display='none';
            color.options[6].style.display='none';
            color.options[1].style.display='block';
            color.options[2].style.display='block';
            color.options[3].style.display='block';
        }
        else if (design.options[2].selected) {
            color.options[4].selected=true;
            color.options[0].style.display='none';
            color.options[1].style.display='none';
            color.options[2].style.display='none';
            color.options[3].style.display='none';
            color.options[4].style.display='block';
            color.options[5].style.display='block';
            color.options[6].style.display='block';
        }
        else {
            design.options[0].selected=true;
            color.options[0].selected=true;
            color.options[0].style.display='block';
            color.options[1].style.display='none';
            color.options[2].style.display='none';
            color.options[3].style.display='none';
            color.options[4].style.display='none';
            color.options[5].style.display='none';
            color.options[6].style.display='none';

        }
    }

