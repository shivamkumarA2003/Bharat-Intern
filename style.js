const apiKey = "5a53c59c802c452a94673506240501";
async function showWeather(){
const location = "meerut";
const includeAqi = "yes";
const apiUrl = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=${includeAqi}`);
const data = await apiUrl.json(); 
console.log("weather ",data);
let newpara = document.createElement('p');
newpara.textContent =`${data?.current?.temp_c}C`;
document.body.appendChild(newpara);

 
}