const fetchingData = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let product = document.querySelector(".product__grid-container");
    async function fetchProducts(url) {
      let data = await fetch(url);
      let response = await data.json();

      for (let i = 0; i < response.length; i++) {
        product.innerHTML += `<div class="product__content">
                <img src="${response[i].image}" alt="" class="product_img">
                <h2 class="product__title">${response[i].title}</h2>
                <h4 class="product__category">${response[i].category}</h4>
                <p class="product__description">${response[i].description}</p>
                  <div class="product__price-container">
                    <h3 class="product__price">${response[i].price}</h3>
                    <a href="" class="product__addToCart"></a>
                  </div>
        </div>`;
      }
    }

    fetchProducts("https://fakestoreapi.com/products");
  });
};

export default fetchingData;
