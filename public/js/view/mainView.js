const view = {};

view.showComponent = function (name) {
    let app = document.getElementById('app')
    switch (name) {
        case 'register': {
            // display Register
            app.innerHTML = components.register;
            let link = document.getElementById('register-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
            view.showComponent('logIn');
            }

            function formSubmitHandler(event) {
                event.preventDefault()
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }
                let validateResult = [
                    view.validate(registerInfo.firstname, validators.require, 'firstname-error', 'Invalid first name'),
                    view.validate(registerInfo.lastname, validators.require, 'lastname-error', 'Invalid last name'),
                    view.validate(registerInfo.email, validators.email, 'email-error', 'Invalid email'),
                    view.validate(registerInfo.password, validators.password, 'password-error', 'Invalid password'),
                    view.validate(registerInfo.confirmPassword,
                        function (value) { return value && value == registerInfo.password },
                        'confirmPassword-error',
                        'Please check your password again')
                ]

                if (allPassed(validateResult)) {
                    controller.register(registerInfo)
                }
            }
            break
        }

        case 'logIn': {
            //display Log In
            app.innerHTML = components.logIn;
            let link = document.getElementById('log-in-link');
            link.onclick = linkClickHandler

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('register');
            }
            
            function formSubmitHandler(e) {
                e.preventDefault()
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value
                }

                let validateResult = [
                view.validate(loginInfo.email, validators.email, 'email-error', 'Invalid email'),
                view.validate(loginInfo.password, validators.password, 'password-error', 'Invalid password')
                ]
                if (allPassed(validateResult)) {
                    controller.logIn(loginInfo)
                }
            }
            break
        }

        case 'buyer': {
            app.innerHTML = components.buyer
            break
        }

        case 'loading': {
            app.innerHTML = components.loading

            break
        }
    }
}

view.setText = function (id, text) {
    document.getElementById(id).innerText = text
}

view.validate = function (value, validator, idErrorMessage, errorMessage) {
    if (validator(value)) {
        view.setText(idErrorMessage, '')
        return true
    } else {
        view.setText(idErrorMessage, errorMessage)
        return false
    }
}

view.disable = function(id) {
    document.getElementById(id).setAttribute('disabled', true)
}
view.enable = function(id) {
    document.getElementById(id).removeAttribute('disabled')
}

view.validateInfoProfile = function (value, defaultValue) {
    if (value.trim() != "") {return true} 
    if (value.trim() == "") {value = defaultValue; return true}
}

// VALIDATOR

const validators = {
    require(str) {
        return str
    }, email(str) {
        return str.includes('@')
    }, password(str) {
        return str.length >= 6
    }
}

function allPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {return false} else {return true}
    }
}
