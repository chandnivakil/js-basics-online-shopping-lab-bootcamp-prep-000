var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = Object.assign({}, { itemName: item }, { itemPrice: Math.floor(Math.random() * 101) }) 
 cart.push(item)
 return `${item.itemName} has been added to your cart.`
}
 

function viewCart() {
  var inCart = ""
  for(var i = 0; i < cart.length; i++) {
    if (cart.length === 1) { 
    return `In your cart you have ${item.itemName} at ${item.itemPrice}.`
    }
  if (cart.length > 1) {
    inCart = inCart + `${item.itemName}` + "at" `${item.itemPrice}` + "," + "and"
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
