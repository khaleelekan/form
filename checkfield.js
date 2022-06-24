const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError (input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
         small.innerText = message;
    }
    // Show success
    function showSuccess (input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
// funtion
function checkRequired(inputArr){
    inputArr.forEach((input) => {
         
        if(input.value.trim() === ''){
            showError(input, `${fieldName(input)} field is required`);
        } else{
            showSuccess(input);
        }  
    });

}
function fieldName (input) {
    return input.id.replace(input.id.charAt(0), input.id.charAt(0).toUpperCase());
}
function checkLength (input, min, max){
    if(input.value.length < min){
        showError(input, `${fieldName(input)} must not be less than ${min}`);
    }else if (input.value.length > max) {
        showSuccess(input, `${fieldName(input)} must be less than ${min}`);
    }else{
        showSuccess(input);
    }

}
function checkPasswordMatch (input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `password doesnt match`);
    }else{
        showSuccess(input2);
    }
    
}

// Event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkPasswordMatch(password, password2);
});