// Variables globales
let cart = [];
const products = [
  { id: 1, name: "Coque iPhone", price: 15 },
  { id: 2, name: "Coque Samsung", price: 15 },
  { id: 3, name: "Coque Huawei", price: 15 },
  { id: 4, name: "Coque honor", price: 15 },
];

// Met à jour l'affichage du panier
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");

  cartCount.innerText = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Aucun article dans le panier</li>";
  } else {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = `${item.name} - ${item.price}€`;
      cartItems.appendChild(li);
    });
  }
}

// Ajoute un produit au panier
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

// Gestion des boutons "Ajouter au panier"
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productId = parseInt(
      this.closest(".product").getAttribute("data-id")
    );
    addToCart(productId);
  });
});

// Gestion du bouton "Passer la commande"
document
  .getElementById("checkout-button")
  .addEventListener("click", function () {
    if (cart.length > 0) {
      alert("Merci pour votre commande !");
      cart = [];
      updateCart();
    } else {
      alert("Votre panier est vide.");
    }
  });
