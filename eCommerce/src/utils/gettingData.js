const fetchingData = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let product = document.querySelector(".product__grid-container");
    let searchInput = document.querySelector(".searchVal");

    async function fetchProducts(url) {
      let data = await fetch(url);
      let response = await data.json();

      function displayProducts(searchText) {
        product.innerHTML = ""; // Clear the product container

        for (let i = 0; i < response.length; i++) {
          const productTitle = response[i].title.toLowerCase();
          if (productTitle.includes(searchText.toLowerCase())) {
            product.innerHTML += `<div class="product__content">
              <img src="${response[i].image}" alt="" class="product_img">
              <h2 class="product__title">${
                response[i].title.length > 50
                  ? response[i].title.substring(0, 50).concat("...")
                  : response[i].title
              }</h2>
              <div class="product__price-container">
                <h3 class="product__price"> $${response[i].price}</h3>
                <button href="" class="product__addToCart">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>  
                </button>
              </div>
            </div>`;
          }
        }
      }

      searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.trim();
        displayProducts(searchText);
      });

      displayProducts("");
    }

    fetchProducts("https://fakestoreapi.com/products");
  });
};

export default fetchingData;
