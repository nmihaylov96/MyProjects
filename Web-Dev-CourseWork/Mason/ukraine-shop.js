var total = 0;

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 0
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('£', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total

}

function validate() {

    const customerName = document.getElementById("name")
    const customerEmail = document.getElementById("email")

    if(customerName.value == "" || customerEmail.value == "") {
        alert("No blank values allowed");
        return false;
    } else {
        true;
    }
}

function printOrder() {
    var display = document.getElementById("display");

    display.innerHTML = document.getElementById("name").value;

    display.innerHTML += '<br>' + document.getElementById("email").value;

    display.innerHTML += '<br>' + '<b>Total:</b> £' + total;

}