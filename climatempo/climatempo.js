document.querySelector("#search").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const cityName = document.querySelector("#city_name").value;
  
    if (!cityName) {
      document.querySelector("#weather").classList.remove("show");
      showAlert("Você precisa digitar uma cidade...");
      return;
    }
  