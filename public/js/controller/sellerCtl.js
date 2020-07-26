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

controller.acceptOrder = async (createdAt) => {
  let list = model.myListOrders
  let userUid = "";
  if (list.length) {
    for (let item of list) {
      if (item.createdAt == createdAt) {
        item.accepted = true
      }
      userUid = item.userUid 
    }
    
    await firebase
    .firestore()
    .collection('sellers_demo')
    .doc(toDoc(firebase.auth().currentUser.email))
    .update({
      orders: list
    })

    let list2 = []

    await firebase
    .firestore()
    .collection('users')
    .doc(userUid)
    .get()
    .then(doc=>{
      list2 = doc.data().orders
    })

    for (let item of list2) {
      if (item.createdAt == createdAt) {
        item.accepted = true
      }
    }

    await firebase
    .firestore()
    .collection('users')
    .doc(userUid)
    .update({
      orders: list2
    })

    model.saveListOrders(list)
    view.showListOrdersSeller()
  }
  
}