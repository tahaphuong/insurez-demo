const view = {};

view.showComponent = async function (name) {
    const navColor = '#e2e4ff'
    let app = document.getElementById('app')
    console.log(name)
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
                    name: form.name.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }
                let validateResult = [
                    view.validate(registerInfo.name, validators.require, 'name-error', 'Invalid first name'),
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
            getById('user-name').innerText = firebase.auth().currentUser.displayName || 'Guest'
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            toggleModal("add-insurance-button", "cancel-button-add-insurance", "add-insurance-modal-container")
            getById('add-insu-button').onclick = getInputInsu
            await controller.getListInsus()

            async function getInputInsu() {
                getById('add-insu-error').innerText = ''
                let e = getById("consulting-provider")
                let provider = e.options[e.selectedIndex].value
                let insuCode = getById('insu-code-input').value
                let contractId = getById('contract-id-input').value

                
                if (provider.trim().length && insuCode.trim().length && contractId.trim().length) {
                    view.disable('add-insu-button')
                    await controller.addNewInsu({
                        provider: provider.trim(), 
                        insuCode: insuCode.trim(), 
                        contractId: contractId.trim()})
                    view.enable('add-insu-button')
                    insuCode = ''
                    contractId = ''
                    getById('add-insurance-modal-container').style.display = 'none'
                } else {
                    getById('add-insu-error').innerText = 'Trường vừa nhập chưa hợp lệ ☹️'
                }
            }
            break
        }
        case 'consultScreen': {
            app.innerHTML = components.consultScreen
            getById('user-name').innerText = firebase.auth().currentUser.displayName || 'Guest'
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            break
        }
        case 'orderScreen': {
            app.innerHTML = components.orderScreen
            getById('user-name').innerText = firebase.auth().currentUser.displayName || 'Guest'
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            toggleModal("add-insurance-button", "cancel-button-add-order", "add-order-modal-container")
            getById('add-new-order-button').onclick = getInputOrder
            await controller.getListOrders()

            async function getInputOrder() {
                getById('add-insu-error').innerText = ''
                let e = getById("consulting-provider")
                let provider = e.options[e.selectedIndex].value
                let insuCode = getById('insuCodeInput').value
                
                if (provider.trim().length && insuCode.trim().length) {
                    view.disable('add-new-order-button')
                    await controller.addNewOrder({
                        provider: provider.trim(), 
                        insuCode: insuCode.trim()})
                    view.enable('add-new-order-button')
                    insuCode.value = ''
                    getById("add-order-modal-container").style.display = 'none'
                } else {
                    getById('add-insu-error').innerText = 'Trường vừa nhập chưa hợp lệ ☹️'
                }
            }
            // new order
            break
        }
        case 'claimScreen': {
            app.innerHTML = components.claimScreen
            getById('user-name').innerText = firebase.auth().currentUser.displayName || 'Guest'
            let nav = document.getElementById(name)
            nav.style.backgroundColor = navColor
            toggleModal("add-insurance-button", "cancel-button-add-claim", "add-claim-modal-container")
            getById('add-new-claim-button').onclick = getInputClaim
            await controller.getListClaims()
            async function getInputClaim() {
                getById('add-insu-error').innerText = ''
                let e = getById("consulting-provider")
                let provider = e.options[e.selectedIndex].value
                let contractId = getById('contractIdInput').value

                if (provider.trim().length && contractId.trim().length) {
                    view.disable('add-new-claim-button')
                    await controller.addNewClaim({
                        provider: provider.trim(), 
                        contractId: contractId.trim()})
                    view.enable('add-new-claim-button')
                    contractId = ''
                    getById("add-claim-modal-container").style.display = 'none'
                } else {
                    getById('add-insu-error').innerText = 'Trường vừa nhập chưa hợp lệ ☹️'
                }
            }

            break
        }
        case 'orderScreenSeller': {
            app.innerHTML = components.orderScreenSeller
            await controller.getData()
            getById(name).style.backgroundColor = navColor
            getById('user-name').innerText = model.myInfo.name
            await controller.getListOrdersSeller()
            break;
        }
        case 'claimScreenSeller': {
            app.innerHTML = components.claimScreenSeller
            await controller.getData()
            getById(name).style.backgroundColor = navColor
            getById('user-name').innerText = model.myInfo.name
            break;
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

view.delText = function (id) {
    document.getElementById(id).innerText = ''
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
function toggleModalInsu(contractId, closeButtonId, modalId) {
    for (let insu of model.myListInsus) {
        if (insu.contractId == contractId) {
            getById('detail-name-provider').innerText = insu.provider + ' Insurance'
            getById('detail-name').innerText = insu.insuCode
            getById('detail-id').innerHTML = `<span>contract's ID: </span>${insu.contractId}`
            getById('detail-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${insu.contractId}`

            getById(modalId).style.display = "block";
            break;
        }
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
function toggleModal(triggerButtonId, closeButtonId, modalId) {
    getById(triggerButtonId).onclick = function() { 
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

view.showListOrdersSeller = () => {
    if (model.myListOrders.length > 0) {
        getById('orders-list').innerHTML = components.orderTitleSeller
        for (let i=0; i<model.myListOrders.length; i++) {
            getById('orders-list').innerHTML += components.myOrderSeller(model.myListOrders[i], i+1)
        }
    } else {
        getById('orders-list').innerHTML = 'Chưa có dữ liệu'
    }
}
