

const title=document.getElementById('title');
const selectDesign = document.createElement('OPTION');      //creates an option element
const color = document.getElementById('color');             //creates variable named 'color' with the value of the color selection
const design = document.getElementById('design');           //creates variable named 'design' with the value of the design selection
const activityChecks = document.querySelectorAll('.activities input[type="checkbox"]');
const totalSpan = document.createElement('SPAN');
const payment = document.getElementById('payment');
const creditCard=document.getElementById('credit-card');
const payPal=document.getElementById('paypal');
const bitCoin=document.getElementById('bitcoin');
otherInput = document.querySelector('.other');
otherInput.style.display='none';
selectDesign.classList.add('selectDesign');                 //adds class to the selectDesign option element
selectDesign.innerHTML="Please select a design option";     //adds html text to the selectDesign option
color.insertBefore(selectDesign, color.firstChild);         //inserts the selectDesign element into the beginning of the color selection options list
design.options[0].selected=true;                            //makes the default selected option selectDesign
totalSpan.classList.add('total');
document.querySelector('.activities').appendChild(totalSpan);
totalSpan.innerHTML =`Total = $0`;
payment.options[1].selected=true;
payPal.style.display='none';
bitCoin.style.display='none';


//REGEX SECTION

const regexCheck = {
    name: {},
    mail: {},


};





function setFocusToNameBox(){                 //sets focus to the name box when page first loads
 document.getElementById('name').focus();
    
}
setFocusToNameBox();

title.onchange= function changeToOther () {               //toggles an option text box when the 'other' drop down option is selected
     if (title.options[5].selected) { 
         otherInput.style.display='block'
        }
     else {
         otherInput.style.display='none'
        }
 };


for (let i=1; i < color.options.length; i++) {              //a for loop that runs through each of the color options and hides all the options except the first
if (design.options[0].selected=true) { 
    color.options[0].selected=true; 
    color.options[i].style.display='none';
}

};

design.onchange = function changeDesignOptions () {                //this onchange function shows or hides different color options depending on which design option is selected
    
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
    };

   

onchange = function disableCheckBoxes(e) {
    const clicked = e.target;
    const dayAndTime = clicked.getAttribute('data-day-and-time');
    let total = 0;

    for (let i = 0; i < activityChecks.length; i++) {
        let timeValue =  activityChecks[i].getAttribute('data-day-and-time');
        if (timeValue === dayAndTime) {
        
                if (clicked.checked) {
                    activityChecks[i].disabled=true;
                    clicked.disabled=false;
                }
              else {activityChecks[i].disabled=false}
                
        }

            if (activityChecks[i].checked)
            {total += +activityChecks[i].getAttribute('data-cost');}
         totalSpan.innerHTML =`Total = $${total}`;



    }
 };
  

payment.onchange = function paymentOptionsToggle() {
    
        if (payment.options[1].selected) {
            creditCard.style.display='block';
            payPal.style.display= 'none';
            bitCoin.style.display='none';
        }
        else if (payment.options[2].selected) {
            creditCard.style.display='none';
            payPal.style.display= 'block';
            bitCoin.style.display='none';
        }
        else if (payment.options[3].selected) {
            creditCard.style.display='none';
            payPal.style.display= 'none';
            bitCoin.style.display='block';
        }
        else {
            creditCard.style.display='none';
            payPal.style.display= 'none';
            bitCoin.style.display='none';
        }
}

