let fetcheddata;

const fetchingData = () => {
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        // Work with the fetched data

        fetcheddata = structuredClone(data);
      })
      .catch((error) => {
        // Handle any errors during the fetch
        console.error("There was a problem with the fetch operation:", error);
      });
  });

  const alreadyfetched = () => {
    console.log(fetcheddata);
  };
};

export default fetchingData;
