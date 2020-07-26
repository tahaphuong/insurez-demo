const view = {};

view.showComponent = async function (name) {
    const navColor = '#e2e4ff'
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

        case 'myInsuScreen': {
            app.innerHTML = components.myInsuScreen
            let nav = document.getElementById(name)

            nav.style.backgroundColor = navColor
        
            toggleModal("add-insurance-button", "cancel-button-add-insurance", "add-insurance-modal-container")

            await controller.getListInsus()
            break
        }
        case 'consultScreen': {
            app.innerHTML = components.consultScreen
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            break
        }
        case 'orderScreen': {
            app.innerHTML = components.orderScreen
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            toggleModal("add-insurance-button", "cancel-button-add-order", "add-order-modal-container")
            await controller.getListOrders()
            break
        }
        case 'claimScreen': {
            app.innerHTML = components.claimScreen
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            toggleModal("add-insurance-button", "cancel-button-add-claim", "add-claim-modal-container")
            await controller.getListClaims()
            break
        }

        default: {
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

function getById(id) {
    return document.getElementById(id)
}
function toggleModal(triggerButtonId, closeButtonId, modalId) {
    getById(triggerButtonId).onclick = function() {
        for (let insu of model.myListInsus) {
            if ('insu-' + insu.contractId == triggerButtonId) {
                getById('detail-name-provider').innerText = insu.provider + ' Insurance'
                getById('detail-name').innerText = insu.insuCode
                getById('detail-id').innerHTML = `<span>contract's ID: </span>${insu.contractId}`
                getById('detail-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${insu.contractId}`
            }
        }
        getById(modalId).style.display = "block";
    }
    getById(closeButtonId).onclick = function() {
        getById(modalId).style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == getById(modalId)) {
            getById(modalId).style.display = "none";
        }
    }
}

view.showListInsus = () => {
    if (model.myListInsus.length > 0) {
        getById('list-insurance').innerHTML = ``
        for (let item of model.myListInsus) {
            getById('list-insurance').innerHTML += components.myInsu(item)
            toggleModal('insu-' + item.contractId, 'cancel-button', 'detail-order')
        }
    } else {
        getById('list-insurance').innerHTML = 'Chưa có dữ liệu'
    }
}

view.showListOrders = () => {
    if (model.myListOrders.length > 0) {
        getById('orders-list').innerHTML = components.orderTitle
        for (let i=0; i<model.myListOrders.length; i++) {
            getById('orders-list').innerHTML += components.myOrder(model.myListOrders[i], i+1)
        }
    } else {
        getById('orders-list').innerHTML = 'Chưa có dữ liệu'
    }
}

view.showListClaims = () => {
    if (model.myListClaims.length > 0) {
        getById('orders-list').innerHTML = components.claimTitle
        for (let i=0; i<model.myListClaims.length; i++) {
            getById('orders-list').innerHTML += components.myOrder(model.myListClaims[i], i+1)
        }
    } else {
        getById('orders-list').innerHTML = 'Chưa có dữ liệu'
    }
}