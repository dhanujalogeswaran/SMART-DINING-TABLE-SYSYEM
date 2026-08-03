let cart = [];
let total = 0;

// Scroll to Menu
function scrollMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

// Add to Cart
function addCart(item, price) {

    cart.push({
        name: item,
        price: price
    });

    total += price;

    displayCart();
}

// Display Cart
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML = "<p>No items added.</p>";

    }else{

        cart.forEach(function(food,index){

            cartItems.innerHTML += `
            <div style="margin:10px;padding:10px;border-bottom:1px solid #ccc;">
                <strong>${food.name}</strong>
                <br>
                ₹${food.price}
                <br><br>
                <button onclick="removeItem(${index})">
                Remove
                </button>
            </div>
            `;

        });

    }

    document.getElementById("total").innerHTML = total;

}

// Remove Item
function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    displayCart();

}

// Place Order
function placeOrder(){

    if(cart.length==0){

        alert("Your Cart is Empty!");

        return;

    }

    alert("🎉 Order Placed Successfully!\n\nThank You For Ordering.");

    cart=[];

    total=0;

    displayCart();

}

// Search Food
function searchFood(){

    let input=document.getElementById("search").value.toUpperCase();

    let card=document.getElementsByClassName("card");

    for(let i=0;i<card.length;i++){

        let title=card[i].getElementsByTagName("h3")[0];

        if(title.innerHTML.toUpperCase().indexOf(input)>-1){

            card[i].style.display="block";

        }

        else{

            card[i].style.display="none";

        }

    }

}

// Welcome Message
window.onload=function(){

    console.log("Smart Dining Loaded Successfully");

}