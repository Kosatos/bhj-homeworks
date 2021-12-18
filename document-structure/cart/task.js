const quantityControllers = [
	...document.querySelectorAll(".product__quantity-control"),
];
const addToBasketButtons = document.querySelectorAll('.product__add');
const basket = document.querySelector('.cart__products');

	quantityControllers.forEach((element) => {
		element.addEventListener("click", (event) => {
			if (event.target.classList.contains("product__quantity-control_dec")) {
				recordValue(event, -1);
			} else if (
				event.target.classList.contains("product__quantity-control_inc")
			) {
				recordValue(event, 1);
			}
		});
	});


function recordValue(event, step) {
	let value = parseInt(event.target.closest(".product").querySelector(".product__quantity-value").innerText, 10);

	if(value >= 0) {
		value = value + step
		if (value < 1) {
			value = 1;
		}
	} 
	
	event.target
		.closest(".product")
		.querySelector(".product__quantity-value").innerText = `${value}`;
}

addToBasketButtons.forEach((button) => {
	let productId = button.closest(".product").dataset.id; 
	button.addEventListener('click', (event) => {
		let currentEl = basket.querySelector('.cart__product[data-id="'+productId+'"]');
		if(currentEl) {
			currentEl.querySelector('.cart__product-count').innerText = `${parseInt(currentEl.querySelector('.cart__product-count').innerText, 10) + parseInt(event.target.closest(".product")
			.querySelector(".product__quantity-value").innerText, 10)}`;
		} else {
			basket.appendChild(createCartItem(event));		
		}	
	})
})

function createCartItem(event) {
	const cartProduct = document.createElement('div');
	cartProduct.classList.add('cart__product');
	cartProduct.dataset.id = event.target.closest(".product").dataset.id;
	const img = document.createElement('img');
	img.classList.add('cart__product-image');
	img.src = event.target.closest(".product")
	.querySelector(".product__image").src;
	const count = document.createElement('div');
	count.classList.add('cart__product-count');
	count.innerText = event.target.closest(".product")
	.querySelector(".product__quantity-value").innerText;
  
	cartProduct.appendChild(img);
	cartProduct.appendChild(count);
  
	return cartProduct;
  }


