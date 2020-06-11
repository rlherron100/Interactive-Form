

//TO DO
// Correct the credit card information regexes
// Figure out how to make the activity border top appear
// Figure out how to make the zip and cvv error messages visible



const form=document.querySelector('form');
const title=document.getElementById('title');
const selectDesign = document.createElement('OPTION');      //creates an option element
const color = document.getElementById('color');             //creates variable named 'color' with the value of the color selection
const design = document.getElementById('design');           //creates variable named 'design' with the value of the design selection
const activityChecks = document.querySelectorAll('.activities input[type="checkbox"]');
const activities = document.getElementsByClassName('activities');
activities[0].setAttribute('id', 'activities');
const activitiesById = document.getElementById('activities');
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





// document.querySelectorAll('.activities').setAttribute('id', 'activities'); //NEED TO GIVE AN ID ATTRIBUTE TO THE ACTIVITIES FIELDSET SO THAT I CAN INSERT A NODE UNDER IT






//REGEX SECTION


let validName = false;
let validEmail = false;
let validActivities = false;
let validCardNum = false;
let validZip = false;
let validCvv = false;
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let ccNum= document.getElementById('cc-num');
let zip = document.getElementById('zip');
let cvv= document.getElementById('cvv');
let fieldset = document.getElementById('basics');
let ccDiv= document.getElementById('credit-card');
const invalidName =  document.createElement('LABEL');
const invalidEmail =  document.createElement('LABEL');
const invalidActivities= document.createElement('LABEL');
const invalidccNum = document.createElement('LABEL');
const invalidZip = document.createElement('LABEL');
const invalidCVV = document.createElement('LABEL');
const submit = document.getElementById('submit');
//Name Validator Element
invalidName.classList.add('invalidName')
invalidName.innerHTML ="Please enter a valid name.";
invalidName.style.color = 'red';
invalidName.style.display='none';
//Email Validator Element
invalidEmail.classList.add('invalidEmail');
invalidEmail.innerHTML ="Please enter a valid email.";
invalidEmail.style.color = 'red';
fieldset.insertBefore(invalidEmail, fieldset.children[5]);
invalidEmail.style.display= 'none';
//Activities Validator Element
invalidActivities.classList.add('invalidActivities');
invalidActivities.innerHTML= "You must select at least one activity.";
invalidActivities.style.color = 'red';
activitiesById.insertBefore(invalidActivities, activitiesById[0]);
invalidActivities.style.display='none';
//Credit Card Number Validator Element
invalidccNum.classList.add('invalidccNum');
invalidccNum.innnerHTML = "Please enter a valid Credit Card Number.";
invalidccNum.style.color='red';
invalidccNum.style.display='none';
ccDiv.insertBefore(invalidccNum, ccDiv.children[3]);
//Credit Card Zip Code Validator Element
invalidZip.classList.add('invalidZip');
invalidZip.innerHTML= "Please enter a valip zip code.";
invalidZip.style.color='red';
invalidZip.style.display='none';
ccDiv.insertBefore(invalidccNum, ccDiv.children[4]);
//Credit Card CVV Validator Element
invalidCVV.classList.add('invalidcvv');
invalidCVV.innerHTML= "Please enter a valid CVV.";
invalidCVV.style.color='red';
invalidCVV.style.display='none';
ccDiv.insertBefore(invalidccNum, ccDiv.children[5]);

document.querySelector('button[type="submit"]').setAttribute('id', 'submit')
fieldset.insertBefore(invalidName, fieldset.children[3]);


function nameRegex (inputName) {
    return /^[a-z]+\s[a-z]+$/i.test(inputName);
}
function emailRegex (inputEmail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail); //source https://emailregex.com/
}
function ccNumRegex (inputCC) {/^\d{13,16}$/.test(inputCC)};
function zipRegex (inputZip) {/^[0-9]{4}$/.test(inputZip)}; // from https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
function cvvRegex (inputCVV) {/^[0-9]{3}$/.test(inputCVV)};
//blur event form validators
name.addEventListener ('blur', () => {nameValidator()});
mail.addEventListener ('blur', () => { emailValidator()});
ccNum.addEventListener('blur', () => {ccNumValidator()})
zip.addEventListener('blur', () => {zipValidator()} );
cvv.addEventListener('blur', () => {cvvValidator()} );


function nameValidator() {
    
    let userName = name.value;
    
    if (nameRegex(userName)) {
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
    
};

function emailValidator () {
            let userEmail = mail.value;
        
    
        
        if (emailRegex(userEmail)) {
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
        
};

function activityValidator () {

        if (total !== 0)
        {
        activitiesById.style.border = '2px solid green';
        activitiesById.style.color='green';
        
            invalidActivities.style.display='none';
        return validActivities = true;
    } else {
        activitiesById.style.border = '3px solid red';
        invalidActivities.style.display='block';
        return validActivities=false;
    }
}




function ccNumValidator () {let userccNum = ccNum.value;
        
    if (payment.children[1].selected) {
        
        if (ccNumRegex(userccNum)) {
            ccNum.style.border = '2px solid green';
            ccNum.style.color = 'green';
            invalidccNum.style.display= 'none';
            document.querySelectorAll('.invalidccNum').forEach(function(a) {                        
                a.style.display='none';
            })
            return validccNum = true;
        } else {
            ccNum.style.border = '3px solid red';
            invalidccNum.style.display= 'block';
            return validccNum = false;
        }}}
function zipValidator () {
        let userZip= zip.value;
        
            
            if (payment.children[1].selected) {
                if (zipRegex(userZip)) {
                    zip.style.border = '2px solid green';
                    zip.style.color = 'green';
                    invalidZip.style.display= 'none';
                    document.querySelectorAll('.invalidZip').forEach(function(a) {                        
                        a.style.display='none';
                    })
                    return validZip = true;
                } else {
                    zip.style.border = '3px solid red';
                    invalidZip.style.display= 'block';
                    return validZip = false;
                }}}
function cvvValidator () {
         let userCvv= cvv.value;
        
         if (payment.children[1].selected) {
                
                if (cvvRegex(userCvv)) {
                    cvv.style.border = '2px solid green';
                    cvv.style.color = 'green';
                    invalidCVV.style.display= 'none';
                    document.querySelectorAll('.invalidcvv').forEach(function(a) {                        
                        a.style.display='none';
                    })
                    return validCvv = true;
                } else {
                    cvv.style.border = '3px solid red';
                    invalidCVV.style.display= 'block';
                    return validCvv = false;
                }}};

 
  form.addEventListener('submit', (e) => {
    nameValidator();
    if ((!nameValidator() && !emailValidator() && !activityValidator() && !ccNumValidator() && !zipValidator () && !cvvValidator()) || 
    (!nameValidator() || !emailValidator() || !activityValidator() || !ccNumValidator() || !zipValidator () || !cvvValidator()))
   {
       e.preventDefault();

       window.scrollTo(0,0)}
        else {alert('you did it!')}
});

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

    let total = 0;

onchange = function disableCheckBoxes(e) {
    const clicked = e.target;
    const dayAndTime = clicked.getAttribute('data-day-and-time');
    

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
