controller.getData = async () => {
  await firebase
  .firestore()
  .collection('sellers_demo')
  .doc(toDoc(firebase.auth().currentUser.email))
  .get()
  .then(doc => {
    if (doc.exists) {
      if(doc.data().info) {
        if(!firebase.auth().currentUser.displayName) {
          firebase.auth().currentUser.updateProfile({displayName: doc.data().info.name})
        }
      }
    }
  })
}

controller.getListOrdersSeller = async () => {
  await firebase
  .firestore()
  .collection('sellers_demo')
  .doc(toDoc(firebase.auth().currentUser.email))
  .get()
  .then(doc=> {
    if (doc.exists) {
      if(doc.data().orders)
        model.saveListOrders(doc.data().orders)
    }
      
  })
  view.showListOrdersSeller()
}

controller.acceptOrder = async () => {
  let list = model.myListOrders
  if (list.length) {
    for (let item of list) {
      item.accepted = true
    }
    
    await firebase
    .firestore()
    .collection('sellers_demo')
    .doc(toDoc(firebase.auth().currentUser.email))
    .update({
      orders: list
    })
    model.saveListOrders(list)
    view.showListOrdersSeller()
  }
  
}