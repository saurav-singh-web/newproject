function Product(name, category, image, price, gender, sold) {
  this.name = name;
  this.category = category;
  this.image = image;
  this.price = price;
  this.gender = gender;
  this.sold = sold;
}

document.getElementById("add").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;
  const price = parseFloat(document.getElementById("price").value);
  const gender = document.getElementById("gender").value;
  const sold = document.getElementById("sold").checked;

  if (!name || !category || !image || !price || !gender) {
    alert("Please fill out all fields before submitting the product.");
    return;
  }

  const newProduct = new Product(
    name,
    category,
    image,
    parseFloat(price),
    gender,
    sold
  );

  let products = JSON.parse(localStorage.getItem("Products")) || [];

  products.push(newProduct);

  localStorage.setItem("Products", JSON.stringify(products));

  document.getElementById("productForm").reset();

  alert("Product added successfully!");
});
