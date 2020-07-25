const controller = {};
controller.initAuth = function ()
{
    view.showComponent('loading')
    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)
    function onAuthStateChangedHandler(user) {
        if (user) {
            view.showComponent('buyer')
        } else {
            view.showComponent('logIn')
        }
    }
}