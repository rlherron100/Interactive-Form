
const form=document.querySelector('form');
const title=document.getElementById('title');
const selectDesign = document.createElement('OPTION');      //creates an option element
const color = document.getElementById('color');             //creates variable named 'color' with the value of the color selection
const design = document.getElementById('design');           //creates variable named 'design' with the value of the design selection
const activityChecks = document.querySelectorAll('.activities input[type="checkbox"]');
const activities = document.getElementsByClassName('activities');
const totalSpan = document.createElement('SPAN');
const payment = document.getElementById('payment');
const creditCard=document.getElementById('credit-card');
const payPal=document.getElementById('paypal');
const bitCoin=document.getElementById('bitcoin');
form.classList.add('form');
document.getElementById('name').placeholder = "Type name here...";
document.getElementById('mail').placeholder = "example@email.com";
document.getElementById('cc-num').placeholder= "0000 0000 0000 0000";
document.getElementById('zip').placeholder= "00000";
document.getElementById('cvv').placeholder= "000";
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


let validName = false;
let validEmail = false;
let validCardNum = false;
let validZip = false;
let validCvv = false;
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let fieldset = document.getElementById('basics');
const invalidName =  document.createElement('LABEL');
invalidName.classList.add('invalidName')

document.querySelector('button[type="submit"]').setAttribute('id', 'submit')
const submit = document.getElementById('submit');

fieldset.insertBefore(invalidName, fieldset.children[3]);
invalidName.innerHTML ="Please enter a valid name.";
invalidName.style.display='none';

function nameValidator (inputName) {
    return /^[a-z]+\s[a-z]+$/i.test(inputName);
}

name.addEventListener ('blur', () => {
    
    let userName = name.value;
    
    if (nameValidator(userName)) {
        name.style.border = '2px solid green';
        name.style.color = 'green';
        invalidName.style.display= 'none';
        document.querySelectorAll('.invalidName').forEach(function(a) {                         //forEach code snippet modifed from stackOverflow https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
            a.style.display='none';
          })
        return validName = true;
    } else {
        name.style.border = '3px solid red';
        invalidName.style.display='block';
        return validName = false;
    }
    
});

const invalidEmail =  document.createElement('LABEL');
invalidEmail.classList.add('invalidEmail')
invalidEmail.innerHTML ="Please enter a valid email."
fieldset.insertBefore(invalidEmail, fieldset.children[6]);
invalidEmail.style.display= 'none';

function emailValidator (inputEmail) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail); //source https://emailregex.com/
    }

    mail.addEventListener ('blur', () => {
        let userEmail = mail.value;
        
    ;
        
        if (emailValidator(userEmail)) {
            mail.style.border = '2px solid green';
            mail.style.color = 'green';
            invalidEmail.style.display= 'none';
            document.querySelectorAll('.invalidEmail').forEach(function(a) {                        
                a.style.display='none';
            })
            return validEmail = true;
        } else {
            mail.style.border = '3px solid red';
            invalidEmail.style.display= 'block';

            return validEmail = false;
        }
        
});




  
  
 
  form.addEventListener('submit', () => {
    var isChecked = false;
   
    
    for (var i = 0; i < activityChecks.length; i++) {
            if (activityChecks[i].checked) {
                    isChecked = true;
                    break;
            }
    }

    if (isChecked=false) {
            console.log('please work');
            alert("Please select image format from the list.");
            activities.style.border = '3px solid red';
    }

    return isChecked;
});





// submit.addEventListener('click', function validateActivities() {
   
// if (document.querySelector('button[type="submit"]')) {
//     console.log('You must select at least one activity to submit.');
// }
    
// })
// -------------------




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



