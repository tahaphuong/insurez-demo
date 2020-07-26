const model = {
  myListInsus: [],
  myListOrders: [],
  myListClaims: [],
  myInfo: {
    name: 'Guest'
  }
}
model.saveListInsus = insus => {
  model.myListInsus = insus
}
model.saveListOrders = orders => {
  model.myListOrders = orders
}
model.saveListClaims = orders => {
  model.myListClaims = orders
}
model.saveInfo = data => {
  model.myInfo = data
}