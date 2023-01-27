// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const totalPrice = price * quantity

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
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
