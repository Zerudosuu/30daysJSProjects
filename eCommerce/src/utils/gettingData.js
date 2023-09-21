document.addEventListener("DOMContentLoaded", function () {
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
  }

  fetchProducts("https://api.escuelajs.co/api/v1/products");
});
