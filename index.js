const form = document.querySelector(".forms");
const result = document.querySelector(".input")
const apiKey = "3ffe1a804648a149d4ff3a73e874ef6d"
const card = document.querySelector(".result");

form.addEventListener("submit", async e => {
    e.preventDefault();

    const userInput = result.value;
    if(userInput){
        try{
            const data = await getCityData(userInput);
            displayData(data);
        }
        catch(error){
            displayError(error)
        }
    }
    else{
        displayError("Pls input city !");
    }

});

async function getCityData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const data = await fetch(apiUrl);
    if(!data.ok){
        throw new Error("Data not found");
    }
    return data.json();
};

function displayData(data){
    const {name: city , main : {temp, humidity}, weather: [{description}]} = data;
    const tempInCelsius = (temp - 273.15).toFixed(2); 
    card.style.display = "flex";
    card.innerHTML = `<p class="City">${city}</p>
        <p class="temp">${tempInCelsius}</p>
        <p class="humidity">Humidty : ${humidity}</p>
        <p class="description">${description}</p>`;

}

function displayError(message){
    const displayMessage = document.createElement("p")
    displayMessage.textContent = message;
    card.style.display = "flex"
    card.appendChild(displayMessage);
}