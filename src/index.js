function formatPrice(price) {
  const splitPrice = String(price).split(".")
  const dollars = !splitPrice[0] ? "0" : String(Number(splitPrice[0]))
  const cents = splitPrice[1] === undefined ? "00" :  (splitPrice[1] + "00").slice(0,2)


  return `${dollars}.${cents}`;
}

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  let totalPrice = price * quantity

  totalPrice = Number(formatPrice(totalPrice))
  product.querySelector('.subtotal span').innerText = totalPrice
  return totalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelectorAll('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.querySelectorAll('table#cart tr.product')
  let totalPrice = 0

  multipleProducts.forEach((product) => {
    totalPrice += updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //... your code goes here
  const product = target.closest("tr.product");
  product.remove()
  calculateAll()
}

document.querySelectorAll('.product .btn-remove').forEach((removeBtn) => {
  removeBtn.addEventListener("click", removeProduct)
})

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]')
  const priceInput = document.querySelector('.create-product input[type="number"]')
  const productName = nameInput.value
  const productPrice = priceInput.value
  let validation = true

  if (!productName.length) {
    nameInput.style.borderColor = "red";
    validation = false
  } else {
    nameInput.style.borderColor = "black";
  }
  if (productPrice <= 0) {
    priceInput.style.borderColor = "red";
    validation = false;
  } else {
    priceInput.style.borderColor = "black";
  }

  if (!validation) return

  const rowTemplate = document.querySelector("#product-row")
  const newRow = rowTemplate.content.cloneNode(true)
  newRow.querySelector(".name span").textContent = productName
  newRow.querySelector(".price span").textContent = formatPrice(productPrice)
  newRow.querySelector(".btn-remove").addEventListener("click", removeProduct)
  document.querySelector("table#cart > tbody").appendChild(newRow)

  nameInput.value = ""
  priceInput.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  document.querySelector("#create").addEventListener("click", createProduct)
});
