// Get Order Id and User name to insert in HTML
const params = new URLSearchParams(window.location.search);
let orderNumber = params.get("id");
let user = params.get("user");

document.getElementById('number').innerHTML = orderNumber;
document.getElementById('name').innerHTML = user;

