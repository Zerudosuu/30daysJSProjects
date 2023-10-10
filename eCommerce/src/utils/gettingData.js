const fetchingData = () => {
  document.addEventListener("DOMContentLoaded", function () {
    let product = document.querySelector(".product__grid-container");
    async function fetchProducts(url) {
      let data = await fetch(url);
      let response = await data.json();

      for (let i = 0; i < response.length; i++) {
        product.innerHTML += `<div class="product__content">
                <img src="${response[i].image}" alt="" class="product_img">
                <h2 class="product__title">${
                  response[i].title.length > 50
                    ? response[i].title.substring(0, 50).concat("...")
                    : response[i].title
                }</h2>
                <p class="product__description">${
                  response[i].description.length > 80
                    ? response[i].description
                        .substring(0, 80)
                        .concat(" ...more")
                    : response[i].description
                }</p>
                  <div class="product__price-container">
                    <h3 class="product__price"> $${response[i].price}</h3>
                    <a href="" class="product__addToCart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>  
</a>
                  </div>
        </div>`;
      }
    }

    fetchProducts("https://fakestoreapi.com/products");

    console.log(reponse.error);
  });
};

export default fetchingData;
