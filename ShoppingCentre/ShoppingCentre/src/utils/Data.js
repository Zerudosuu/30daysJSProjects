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
          let rating = fetcheddata[key].rating.rate;
          let svgStart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>

          `;

          let stars = "";
          for (let i = 0; i < rating && i < 5; i++) {
            stars += svgStart;
          }
          productContainer.innerHTML += ` <div class="product">
          <h3 class="productRating">Rating: ${stars}</h3>
          <img src="${fetcheddata[key].image}" alt="" class="productImage">
           <h2 class="productTitle">${
             title.length > 18 ? title.substring(0, 30).concat("...") : title
           }</h2>
            <div class="productPriceRating"> 
              <h2 class="productPrice">$${fetcheddata[key].price}</h2>
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