
// Verification of form & confirm if emails match or do not match. 

const form = document.querySelector("form") // form

form.addEventListener('submit', e => { // check validation 
    if (!form.checkValidity()) {
        e.preventDefault()
    }
    form.classList.add('was-validated') // validated 
}); 


let email1 = document.getElementById('email1'); // email1 text box 
let email2 = document.getElementById('email2'); // email2 text box
let verify = document.getElementById('verify'); // text to verify match 

function verifyEmail () { // verify if emails match 
    verify.innerText = email1.value == email2.value ? 'Emails Match!' : 'Email does not match.';  // match or not
}

email1.addEventListener('keyup', () => { // email1 
    if (email2.value.length != 0) verifyEmail(); // verify match 
})

email2.addEventListener('keyup', verifyEmail); // email2 verify match 
