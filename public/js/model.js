const model = {
  myListInsus: [],
  myListOrders: [],
  myListClaims: [] 
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