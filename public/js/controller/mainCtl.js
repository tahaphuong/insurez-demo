const controller = {};
controller.initAuth = function ()
{
    view.showComponent('loading')
    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)
    function onAuthStateChangedHandler(user) {
        if (user) {
            view.showComponent('myInsuScreen')
        } else {
            view.showComponent('logIn')
        }
    }
}