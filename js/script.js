


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

selectDesign.classList.add('selectDesign');                 //adds class to the selectDesign option element
selectDesign.innerHTML="Please select a design option";     //adds html text to the selectDesign option
color.insertBefore(selectDesign, color.firstChild);         //inserts the selectDesign element into the beginning of the color selection options list
design.options[0].selected=true;                            //makes the default selected option selectDesign


for (let i=1; i < color.options.length; i++) {              //a for loop that runs through each of the color options and hides all the options except the first
if (design.options[0].selected=true) { 
    color.options[0].selected=true; 
    color.options[i].style.display='none';
}

}

onchange = function changeDesignOptions () {                //this onchange function shows or hides different color options depending on which design option is selected
    
        if (design.options[1].selected) {                   //this conditional hides all color options except those for the js puns design
            color.options[1].selected=true;
            color.options[0].style.display='none';
            color.options[4].style.display='none';
            color.options[5].style.display='none';
            color.options[6].style.display='none';
            color.options[1].style.display='block';
            color.options[2].style.display='block';
            color.options[3].style.display='block';
        }
        else if (design.options[2].selected) {              //this conditional hides all color options except those for the I heart js design
            color.options[4].selected=true;
            color.options[0].style.display='none';
            color.options[1].style.display='none';
            color.options[2].style.display='none';
            color.options[3].style.display='none';
            color.options[4].style.display='block';
            color.options[5].style.display='block';
            color.options[6].style.display='block';
        }
        else {                                              //this conditional reiterates that if the design is changed back to default, all except the first color options will dissapear
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

    const activityChecks = document.querySelectorAll('.activities input[type="checkbox"]');
    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('total');
    document.querySelector('.activities').appendChild(totalSpan);
    totalSpan.innerHTML =`Total = $0`;

    function totalCost() {
        let total = 0;
        for (let i = 0; i < activityChecks.length; i++) {
            if (activityChecks[i].checked) {
                total += +activityChecks[i].getAttribute('data-cost');
            }
        }
        return total;
    }

onchange = function disableCheckBoxes(e) {
    const clicked = e.target;
    const dayAndTime = clicked.getAttribute('data-day-and-time');
    
    for (let i = 0; i < activityChecks.length; i++) {
        let otherTime =  activityChecks[i].getAttribute('data-day-and-time');
        if (otherTime === dayAndTime && clicked.checked) {
                activityChecks[i].disabled = true;
                clicked.disabled=false;
        }
        else {
            activityChecks[i].disabled = false
        }
         
    }

} 
onchange = function totaling (e) {
    
        
    const clicked = e.target;
    const cost = clicked.getAttribute('data-cost');
    const totalled= totalCost();
    let total= '';
    
    for (let i =0; i<activityChecks.length; i++) {
        
        if (activityChecks[i].checked) {
            total += +cost;
        
        }
            
        totalSpan.innerHTML =`Total = $${totalled}`;
}}

    
    








//  onchange = 
    


// UNUSED CODE
//     const mainConf = document.querySelector('input[name="all"]');
//     const jsFrame = document.querySelector('input[name="js-frameworks"]');
//     const jsLibs = document.querySelector('input[name="js-libs"]');
//     const express = document.querySelector('input[name="express"]');
//     const node = document.querySelector('input[name="node"]');
//     const buildTools = document.querySelector('input[name="build-tools"]');
//     const npm = document.querySelector('input[name="npm"]');

//     const activities=document.querySelectorAll('input[type="checkbox"]');
//     const time = document.querySelectorAll('input[data-day-and-time]');
//     const checkName= document.querySelectorAll('input[type=name]');


// function disableCheckBoxes () {
//     for (i=0; i<activities.length; i++) {
//         activities[i].addEventListener(change, () => {
//            const targetedTime = event.target.getAttribute('data-day-and-time');

//                     // if the name of the targeted checkbox is such and such, and the time is such and such, disable checkbox with "" name

//            if (targetedTime===activities[i]) {
//             console.log('hi')
//            }
//         })
//     }
// }



// function disableCheckBoxes () {
//     for (i=0; activities.length > i; i++) {
//         if (time === activities[i].dataset.dayAndTime) {
//             activities[i].disabled
//         }
//     }

// }

