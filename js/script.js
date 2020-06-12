
//TO DO
//Activities unchecked no error message shows
//total keeps adding for each button clicked



const form=document.querySelector('form');                  //gives a constant variable name to the form
const title=document.getElementById('title');               //gives a constant variable name to the title
const selectDesign = document.createElement('OPTION');      //creates an option element
const color = document.getElementById('color');             //creates variable named 'color' with the value of the color selection
const design = document.getElementById('design');           //creates variable named 'design' with the value of the design selection
const activityChecks = document.querySelectorAll('.activities input[type="checkbox"]'); //Variable for each of the checkbox elements specifically
const activities = document.getElementsByClassName('activities');       //Variable for the entire activities section, not just the checkboxes
activities[0].setAttribute('id', 'activities');             //gives an id attribute to activities
const activitiesById = document.getElementById('activities');   //this allows the activities section to be manipulated, as a class attribute returns a collection
const totalSpan = document.createElement('SPAN');           //creates the total span
const payment = document.getElementById('payment');         //gives a constant variable name to the payment selection
const creditCard=document.getElementById('credit-card');    //gives constant variable name to the credit card div
const payPal=document.getElementById('paypal');             //gives constant variable name to the paypal div
const bitCoin=document.getElementById('bitcoin');           //gives constant variable name to the bitcoin div
form.classList.add('form');                                 //adds class name to the form element for easier targeting
const otherInput = document.querySelector('.other');        //gives constant variable name to the other text input field
otherInput.style.display='none';                            //hides other field by default
selectDesign.classList.add('selectDesign');                 //adds class to the selectDesign option element
selectDesign.innerHTML="Please select a design option";     //adds html text to the selectDesign option
color.insertBefore(selectDesign, color.firstChild);         //inserts the selectDesign element into the beginning of the color selection options list
design.options[0].selected=true;                            //makes the default selected option selectDesign
totalSpan.classList.add('total');                           //adds class attribute to the totalSpan for easier targeting
document.querySelector('.activities').appendChild(totalSpan); //appends totalSpan to the activities section
totalSpan.innerHTML =`Total = $0`;                          //sets default text of totalSpan to Total = $0
payment.options[1].selected=true;                           //sets the default payment option to credit card
payPal.style.display='none';                                //hides paypal by default
bitCoin.style.display='none';                               //hides bitcoin by default
activitiesById.children[0].style.paddingBottom='60px';      //slight alteration to the Activities legend in order to fix border display issue
activitiesById.children[1].style.marginTop='-73px';         //slight alteration to the first checkboxes margin in order to fix border display issue

//Placeholders for input fields
document.getElementById('name').placeholder = "Type name here..."; 
document.getElementById('mail').placeholder = "example@email.com";
document.getElementById('cc-num').placeholder= "0000 0000 0000 0000";
document.getElementById('zip').placeholder= "00000";
document.getElementById('cvv').placeholder= "000";


//REGEX SECTION

//sets default for each section to false
let validName = false;
let validEmail = false;
let validActivities = false;
let validCardNum = false;
let validZip = false;
let validCvv = false;
//gives variable names to the different sections that need validating
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let ccNum= document.getElementById('cc-num');
let zip = document.getElementById('zip');
let cvv= document.getElementById('cvv');
let fieldset = document.getElementById('basics');
//creates label elements for the validators
const invalidName =  document.createElement('LABEL');
const invalidEmail =  document.createElement('LABEL');
const invalidActivities= document.createElement('LABEL');
const submit = document.getElementById('submit');

//Name Validator Element
invalidName.classList.add('invalidName')
invalidName.innerHTML ="Please enter a valid name.";
invalidName.style.color = 'red';
invalidName.style.display='none';
fieldset.insertBefore(invalidName, fieldset.children[3]);
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
//Submit Button Id Attribution
document.querySelector('button[type="submit"]').setAttribute('id', 'submit')


// Regex for Name Field
function nameRegex (inputName) {
    return /^[a-z]+\s[a-z]+$/i.test(inputName);
}
// Regex for Email Field
function emailRegex (inputEmail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail); //source https://emailregex.com/
}
// Regex for CC Number Field
function ccNumRegex (inputCC) {
    return /^\d{13,16}$/.test(inputCC)};
// Regex for Zip Field
function zipRegex (inputZip) {
    return /^[0-9]{5}$/.test(inputZip)}; // from https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
// Regex for CVV Field
function cvvRegex (inputCVV) {
    return /^[0-9]{3}$/.test(inputCVV)};

//blur event form validators
name.addEventListener ('blur', () => {nameValidator()});
mail.addEventListener ('blur', () => { emailValidator()});
ccNum.addEventListener('blur', () => {ccNumValidator()})
zip.addEventListener('blur', () => {zipValidator()} );
cvv.addEventListener('blur', () => {cvvValidator()} );

//Validator function for Name Field
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
//Validator function for Email Field
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
//Validator function for Activity Field
function activityValidator () {

        if (totalSpan.innerHTML != `Total = $0`)                    //if the total value is 0, then no checkbox was selected, and the validator returns false
        {
        activitiesById.style.border = '2px solid green';
        activitiesById.style.color='green';
        activitiesById.children[1].style.borderTop ='3px solid green'
            invalidActivities.style.display='none';
        return validActivities = true;
    } else {
        activitiesById.style.border = '3px solid red';
        activitiesById.children[1].style.borderTop ='3px solid red'
        invalidActivities.style.display='block';
        return validActivities=false;
    }
}
//Validator function for Credit Card Number Field
function ccNumValidator () {let userccNum = ccNum.value;
        
    if (payment.children[1].selected) {
        
        if (ccNumRegex(userccNum)) {                            //I was having a hard time with display issues on the validator messages for this, zip, and CVV, so I put the error message inside the placeholder
            ccNum.style.border = '2px solid green';
            ccNum.style.color = 'green';
            
            
            return validccNum = true;
        } else {
            ccNum.style.border = '3px solid red';
            document.getElementById('cc-num').placeholder= "Invalid Credit Card #";
            
            return validccNum = false;
        }}}
//Validator function for Zip Field
function zipValidator () {
        let userZip= zip.value;
        
            
            if (payment.children[1].selected) {
                if (zipRegex(userZip)) {
                    zip.style.border = '2px solid green';
                    zip.style.color = 'green';
                    
                   
                    return validZip = true;
                } else {
                    zip.style.border = '3px solid red';
                    document.getElementById('zip').placeholder= "Invalid Zip";
                    return validZip = false;
                }}}
//Validator function for CVV Field
function cvvValidator () {
         let userCvv= cvv.value;
        
         if (payment.children[1].selected) {
                
                if (cvvRegex(userCvv)) {                            
                    cvv.style.border = '2px solid green';
                    cvv.style.color = 'green';

                    
                    
                    return validCvv = true;
                } else {
                    cvv.style.border = '3px solid red';
                    document.getElementById('cvv').placeholder= "Invalid CVV";
                    return validCvv = false;
                }}};

 // Prevents submit default if any or all of validators return false
  form.addEventListener('submit', (e) => {
    nameValidator();
    if ((!nameValidator() && !emailValidator() && !activityValidator() && !ccNumValidator() && !zipValidator () && !cvvValidator()) || 
    (!nameValidator() || !emailValidator() || !activityValidator() || !ccNumValidator() || !zipValidator () || !cvvValidator()))
   {
       e.preventDefault();

       window.scrollTo(0,0)}
        
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
    if (activityChecks[i].checked)                                          //adds selected checkboxes data-cost value to the total
    {total += +activityChecks[i].getAttribute('data-cost');}

 totalSpan.innerHTML =`Total = $${total}`;
    
}

};
  
//This onchange event hides or displays payment options depending on what payment option is selected in the drop down menu
payment.onchange = function paymentOptionsToggle() {
    
        if (payment.options[1].selected) {                  //if credit card is selected, hides paypal and bitcoin options
            creditCard.style.display='block';
            payPal.style.display= 'none';
            bitCoin.style.display='none';
        }
        else if (payment.options[2].selected) {             //if payPal is selected, hides Credit Card and Bitcoin options
            creditCard.style.display='none';
            payPal.style.display= 'block';
            bitCoin.style.display='none';
        }
        else if (payment.options[3].selected) {             //if bitCoin is selected, hides Credit Card and PayPal options
            creditCard.style.display='none';
            payPal.style.display= 'none';
            bitCoin.style.display='block';
        }
        else {
            creditCard.style.display='none';                //if the "please select" option is selected, all options are hidden
            payPal.style.display= 'none';
            bitCoin.style.display='none';
        }
}
