

// const apiurl = "https://api.weatherapi.com/v1/current.json?key=898513123eb94fef987191721252201&q=London&aqi=yes";

let getWeatherBtn = document.querySelector("#getWeatherButton");
let resultCont = document.querySelector('#result');
let inp = document.querySelector('#locationInput')


getWeatherBtn.addEventListener("click", async () => {
    const apiurl = `https://api.weatherapi.com/v1/current.json?key=898513123eb94fef987191721252201&q=${inp.value}&aqi=yes`;
    console.log(inp.value);
    let response = await fetch(apiurl);
    let data = await response.json();
    console.log(data);
    resultCont.innerHTML = `
    <img src="${data.current.condition.icon}"/>
    <div><span>Location : </span> ${data.location.name} </div>
    <div><span>temp : </span>${data.current.temp_c}</div>
    
   
    `
    inp.value = "";
}
)


