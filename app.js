const form = document.querySelector('.c-form')
const userEmailContainer = document.querySelector('.user-email-container')
const emailTitleError = document.querySelector('.u-email-title--error')
const successMessage = document.querySelector('.success-message')
const dismissMessage = document.querySelector('.dismiss-message')

let allowShowSuccessMessage = false

form.email.addEventListener('input', event => {
    const input = event.target
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isAValidEmail = emailRegex.test(input.value)

    if (isAValidEmail) {
        input.classList.remove('u-input--error')
        emailTitleError.style.display = 'none'
        allowShowSuccessMessage = true
    } else {
        input.classList.add('u-input--error')
        emailTitleError.style.display = 'inline'
    }
})

form.addEventListener('submit', event => {
    event.preventDefault()

    const userEmail = event.target.email.value

    userEmailContainer.textContent = userEmail

    if (allowShowSuccessMessage) {
        successMessage.style.display = 'flex'
    }
})

dismissMessage.addEventListener('click', () => {
    successMessage.style.display = 'none'
    form.email.value = ''
})