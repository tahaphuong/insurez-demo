controller.getListInsus = async () => {
  let data = await firebase
  .firestore()
  .collection('users')
  .doc('z5qZcujCz5hnN265sTrh')
  .get()

  model.saveListInsus(data.data().insus)
  view.showListInsus()
}

controller.getListOrders = async () => {
  let data = await firebase
  .firestore()
  .collection('users')
  .doc('z5qZcujCz5hnN265sTrh')
  .get()

  model.saveListOrders(data.data().orders)

  view.showListOrders()
}

controller.getListClaims = async () => {
  let data = await firebase
  .firestore()
  .collection('users')
  .doc('z5qZcujCz5hnN265sTrh')
  .get()

  model.saveListClaims(data.data().claims)
  view.showListClaims()
}