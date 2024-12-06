document.querySelector("#search").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const cityName = document.querySelector("#city_name").value;
  
    if (!cityName) {
      document.querySelector("#weather").classList.remove("show");
      showAlert("Você precisa digitar uma cidade...");
      return;
    }

    const apiKey = "8a60b2de14f7a17c7a11706b2cfcd87c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        cityName
      )}&appid=${apiKey}&units=metric&lang=pt_br`;
    
      const results = await fetch(apiUrl);
      const json = await results.json();