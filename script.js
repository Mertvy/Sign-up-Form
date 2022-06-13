const passwordInput = document.querySelector("#password")
const passwordConfirmationInput = document.querySelector("#confirmPassword")

console.log(passwordInput)
console.log(passwordConfirmationInput)

passwordInput.addEventListener('keyup', () => {
    if (passwordInput.value != passwordConfirmationInput.value) {
        passwordInput.classList.add('error')
        passwordConfirmationInput.classList.add('error')
    }
    else {
        passwordInput.classList.remove('error')
        passwordConfirmationInput.classList.remove('error')
    }
})

passwordConfirmationInput.addEventListener('keyup', () => {
    if (passwordInput.value != passwordConfirmationInput.value) {
        passwordInput.classList.add('error')
        passwordConfirmationInput.classList.add('error')
    }
    else {
        passwordInput.classList.remove('error')
        passwordConfirmationInput.classList.remove('error')
    }
})