const loadData = ()=>{

fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data => dispalyCountries(data));



}

loadData();
const dispalyCountries = countries =>{
    const contrainerr = document.getElementById('country');

const countryHTML = countries.map(country => getCountryHTML(country));
console.log(countryHTML);
contrainerr.innerHTML = countryHTML.join( ' ');



}

const getCountryHTML = country => {
return `
<div class = "country">
    <h2>${country.name}</h2>
    <h4>Capital:${country.capital}</h4>
    <img src="${country.flag}">
</div>

`


}