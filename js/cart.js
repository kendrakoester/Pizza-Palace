
//add to cart
$(".add-to-cart").click(function (event) {
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

//clear cart
$("#clear-cart").click(function (event) {
    shoppingCart.clearCart();
    displayCart();
});

//display cart on shopping cart page
function displayCart() {
    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";
    for (var i in cartArray) {
        output += "<li>"
            + cartArray[i].name
            + " <input class='item-count' type='number' data-name='"
            + cartArray[i].name
            + "' value='" + cartArray[i].count + "' >"
            + " x " + cartArray[i].price
            + " = " + cartArray[i].total
            + " <button class='plus-item' data-name='"
            + cartArray[i].name + "'>+</button>"
            + " <button class='subtract-item' data-name='"
            + cartArray[i].name + "'>-</button>"
            + " <button class='delete-item' data-name='"
            + cartArray[i].name + "'>X</button>"
            + "</li>";
    }
    $("#show-cart").html(output);
    $("#count-cart").html(shoppingCart.countCart());
    $("#total-cart").html(shoppingCart.totalCart());
}

//remove an item from the shopping cart
$("#show-cart").on("click", ".delete-item", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
});

//subtract one item from cart - dont remove entire item
$("#show-cart").on("click", ".subtract-item", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCart(name);
    displayCart();
});

//add item to cart
$("#show-cart").on("click", ".plus-item", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.addItemToCart(name, 0, 1);
    displayCart();
});

//total count of item
$("#show-cart").on("change", ".item-count", function (event) {
    var name = $(this).attr("data-name");
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

