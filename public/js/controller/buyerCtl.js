controller.getListInsus = async () => {
  await firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .get()
  .then(doc => {
    if (doc.exists) {
      if(doc.data().insus) 
        model.saveListInsus(doc.data().insus)
    }
  })
  view.showListInsus()
}

controller.getListOrders = async () => {
  await firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .get()
  .then(doc=> {
    if (doc.exists) {
      if(doc.data().orders)
        model.saveListOrders(doc.data().orders)
    }
      
  })
  view.showListOrders()
}

controller.getListClaims = async () => {
  await firebase
  .firestore()
  .collection('users')
  .doc(firebase.auth().currentUser.uid)
  .get()
  .then(doc=>{
    if (doc.exists) {
      if(doc.data().claims)
        model.saveListClaims(doc.data().claims)
    }
      
  })
  view.showListClaims()
}
controller.addNewInsu = async (data) => {
  data.userUid = firebase.auth().currentUser.uid
  data.createdAt = new Date().toISOString()

  let list = model.myListInsus
  list.unshift(data)

  await firebase
  .firestore()
  .collection('users')
  .doc(data.userUid)
  .update({
    insus: list
  })

  let list2 = await firebase
  .firestore()
  .collection('sellers_demo')
  .doc(data.provider)
  .get()

  let listProvider = []

  if (list2.data().insus) {
    listProvider = list2.data().insus
    listProvider.unshift(data)
  } else 
    listProvider = [data]

  await firebase
    .firestore()
    .collection('sellers_demo')
    .doc(data.provider)
    .update({
      insus: list
    })
  await controller.getListInsus()
}

controller.addNewOrder = async (data) => {
  data.userUid = firebase.auth().currentUser.uid
  data.accepted = false
  data.createdAt = new Date().toISOString()


  let list = model.myListOrders
  list.unshift(data)

  await firebase
  .firestore()
  .collection('users')
  .doc(data.userUid)
  .update({
    orders: list
  })

  let list2 = await firebase
  .firestore()
  .collection('sellers_demo')
  .doc(data.provider)
  .get()

  let listProvider = []

  if (list2.data().orders) {
    listProvider = list2.data().orders
    listProvider.unshift(data)
  } else 
    listProvider = [data]

  await firebase
    .firestore()
    .collection('sellers_demo')
    .doc(data.provider)
    .update({
      orders: list
    })
  await controller.getListOrders()
}

controller.addNewClaim = async (data) => {
  data.userUid = firebase.auth().currentUser.uid
  data.accepted = false
  data.createdAt = new Date().toISOString()

  let list = model.myListClaims
  list.unshift(data)

  await firebase
  .firestore()
  .collection('users')
  .doc(data.userUid)
  .update({
    claims: list
  })

  let list2 = await firebase
  .firestore()
  .collection('sellers_demo')
  .doc(data.provider)
  .get()

  let listProvider = []

  if (list2.data().claims) {
    listProvider = list2.data().claims
    listProvider.unshift(data)
  } else 
    listProvider = [data]

  await firebase
    .firestore()
    .collection('sellers_demo')
    .doc(data.provider)
    .update({
      claims: list
    })
  await controller.getListClaims()

}