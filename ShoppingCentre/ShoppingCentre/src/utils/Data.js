let fetcheddata;
const productContainer = document.querySelector(".productContainer");

const fetchingData = () => {
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        // Work with the fetched data

        fetcheddata = structuredClone(data);

        for (var key in fetcheddata) {
          let title = fetcheddata[key].title;
          productContainer.innerHTML += ` <div class="product">
          <img src="${fetcheddata[key].image}" alt="" class="productImage">
           <h2 class="productTitle">${
             title.length > 18 ? title.substring(0, 30).concat("...") : title
           }</h2>
            <div class="productPriceRating"> 
              <h2 class="productPrice">$${fetcheddata[key].price}</h2>
              <h3 class="productRating">Rating: ${
                fetcheddata[key].rating.rate
              }</h3>
            </div>
         
            <div class="priceButtonContainer">
            <button class="btn">Add to cart</button>
            <button class="btn">Buy</button>
            </div>
        </div>`;
        }
      })
      .catch((error) => {
        // Handle any errors during the fetch
        console.error("There was a problem with the fetch operation:", error);
      });

    ScrollReveal().reveal(".product", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      mobile: false,
    });
  });
};

export default fetchingData;
