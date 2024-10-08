var total = 0;

function updateQuantity() {
    let rows = document.getElementsByClassName("checkout-rows");

    total = 0;
    for (var i = 0; i < rows.length; i++) {
        let qty = rows[i].getElementsByClassName('checkout-quantity')[0].value;
        let cost = rows[i].getElementsByClassName('checkout-price')[0].getAttribute("value");
        total += qty * cost;
    }
    console.log(total);
    document.getElementById("sum").innerHTML = total;
}

function validate() {
    console.log('validate is called');

    const customerName = document.getElementById("name")
    const customerEmail = document.getElementById("email")

    if(customerName.value == "" || customerEmail.value == "") {
        alert("No blank values allowed");
    } else {
    }
}

function printOrder() {
    console.log('printOrder is called');
    var display = document.getElementById("display");

    display.innerHTML = 'Name: ' + document.getElementById("name").value;

    display.innerHTML += '<br>' + 'Email: ' + document.getElementById("email").value;

    display.innerHTML += '<br>' + 'Invoice Details';

    display.innerHTML += '<hr>';

    let rows = document.getElementsByClassName("checkout-rows");
    for (var i = 0; i < rows.length; i++) {
        let qty = rows[i].getElementsByClassName('checkout-quantity')[0].value;
        let cost = rows[i].getElementsByClassName('checkout-price')[0].getAttribute("value");
        let title = rows[i].getElementsByClassName('checkout-title')[0].innerHTML;

        display.innerHTML += 'Product: ' + title;
        display.innerHTML += '<br>' + 'Quantity: ' + qty;
        display.innerHTML += '<br>' + 'Price: £' + cost;
        display.innerHTML += '<br>' + '<br>';
    }

    display.innerHTML += '<br>' + '<b>Total:</b> £' + total;

}