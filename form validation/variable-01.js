

function showMessage(input, message, type){
    const mgs = input.parentNode.querySelector("small");
    input.className = type ? "success" : "error";
    return type;

}

function showError(input,message){
    return showMessage(input, message, false);

}

function showSuccess(input){
    return showMessage(input, "", true);

}


function hasValue(input, message){
    if(input.value.trim() === ""){
        showError(input, message);
    }
return showSuccess(input);
}


const form = document.getElementById("fm-control");
const names = 'please enter your name';
form.addEventListener('submit', function(event){
event.preventDefault();
})

let nameValid = hasValue(from.elements["fname"],names);



function validateEmail(input, requiredMsg, invalidMsg) {
	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
// validate email format
const emailRegex =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = input.value.trim();
if (!emailRegex.test(email)) {
return showError(input, invalidMsg);
}
return true;
}




const emailValid = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";


// validate the form

let emailValid1 = validateEmail(form.elements["email"], emailValid, EMAIL_INVALID);

if (nameValid && emailValid1) {
alert("Demo only. No form was posted.");
}
