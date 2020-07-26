const controller = {};
controller.initAuth = function ()
{
    view.showComponent('loading')
    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)
    async function onAuthStateChangedHandler(user) {
        if (user) {
            if(providerIds.includes(user.uid))
                view.showComponent('orderScreenSeller')
            else 
                view.showComponent('myInsuScreen')
        } else {
            view.showComponent('logIn')
        }
    }
}

const providerIds = [
    'lt6TjE6GzlMQFW0JNAKehHjoXhq1',
    '0JkrvdWmBsV93rA1kDLR1kNuTzG3',
'QwPRsy6VewdFfIaaweVKOakYsZj1',
'WoizbiGR64No31Id0rvY51VZFAY2',
]
function logOut(){
    firebase.auth().signOut()
  }

function toDoc(email) {
    if(email == 'abc@gmail.com')
        return 'abc'
    if(email == 'healtha@gmail.com')
        return 'healtha'
    if(email == 'comfi@gmail.com')
        return 'comfi'
    if(email == 'litey@gmail.com')
        return 'litey'
    return ''
}