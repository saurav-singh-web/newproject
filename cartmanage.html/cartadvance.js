let products = [
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 1,
    name: "Candel",
    price: 50,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 2,
    name: "iPhone",
    price: 20,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 3,
    name: "MacBook",
    price: 40,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 4,
    name: "Redmi",
    price: 10,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 5,
    name: "Vivo",
    price: 70,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
  {
    id: 6,
    name: "Oppo",
    price: 90,
    image:
      "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg",
  },
];

function renderProducts() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `    
            <img src="${product.image}" alt="${product.name}" width="100">
            <div class="price">
                <h3>Under $${product.price}</h3>
            </div>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Cart</button>
        `;
    container.appendChild(productDiv);
  });

  const cartButtons = document.querySelectorAll(".add-to-cart");
  cartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });
}
function addToCart(event) {
  const button = event.target;
  const productName = button.getAttribute("data-name");
  const productId = button.getAttribute("data-id");
  const productPrice = button.getAttribute("data-price");
  const productImage = button.getAttribute("data-image");

  const product = {
    name: productName,
    id: productId,
    price: productPrice,
    image: productImage,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to the cart!`);
}
renderProducts();
