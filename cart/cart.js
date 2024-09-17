document.querySelector("form").addEventListener("submit", cart);
infoArr = [];
function cart(event) {
  event.preventDefault();
  let ProductName = document.querySelector("#Product").value;
  let ProductCatogary = document.querySelector("#Catogary").value;
  let BrandName = document.querySelector("#Brand").value;
  let Amount = parseFloat(document.querySelector("#Amount").value);
  let Deliver = document.querySelector("#Deliver").value;

  if (
    !ProductName ||
    !ProductCatogary ||
    !BrandName ||
    isNaN(Amount) ||
    !Deliver
  ) {
    document.querySelector("#total").innerText =
      "Please enter all the details.";
    return;
  }

  let infoObj = {
    product: ProductName,
    catogary: ProductCatogary,
    brand: BrandName,
    money: Amount,
    delivery: Deliver,
  };
  infoArr.push(infoObj);
  displayTable(infoArr);
  calculateTotal();
}

function displayTable(infoArr) {
  document.querySelector("tbody").innerHTML = "";
  console.log(infoArr.length);
  infoArr.forEach(function (elem, index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = elem.product;
    let col2 = document.createElement("td");
    col2.innerText = elem.catogary;
    let col3 = document.createElement("td");
    col3.innerText = elem.brand;
    let col4 = document.createElement("td");
    col4.innerText = elem.money;
    let col5 = document.createElement("td");
    col5.innerText = elem.delivery;
    let col6 = document.createElement("td");
    if (elem.money > 1000) {
      col6.innerText = "Expensive";
    } else {
      col6.innerText = "Not-Expensive";
    }
    let col7 = document.createElement("td");
    col7.innerText = "Delete";
    col7.style.color = "red";
    col7.style.cursor = "pointer";

    col7.addEventListener("click", function () {
      infoArr.splice(index, 1);
      displayTable(infoArr);
      calculateTotal();
    });
    row.append(col1, col2, col3, col4, col5, col6, col7);
    document.querySelector("tbody").append(row);
  });
}

function calculateTotal() {
  let total = 0;

  infoArr.forEach(function (item) {
    total += item.money;
  });
  document.querySelector("#total").innerText = "Total Price :-" + total;
}
