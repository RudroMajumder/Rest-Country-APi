fetch('https://restcountries.eu/rest/v2/all')
.then( res => res.json())
.then( data => {
    for (let i = 0; i < data.length; i++) {
        const countries = data[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h1 id="country-name"> ${ countries.name } </h1>
            <h2> ${ countries.capital } </h2>
            <button id="show-more" onclick="showMoreInfo('${countries.name}')"> ${ 'SHOW MORE INFO'} </button>
        `;
         countryDiv.innerHTML = countryInfo;

        document.body.appendChild(countryDiv);


    }
})
function showMoreInfo(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then( res => res.json())
    .then( data => showCountryInfo(data[0]))
}
const showCountryInfo = country =>{
    const countryInfoDiv = document.getElementById('country-details');
     countryInfoDiv.innerHTML = `
    <h2> Country Name: ${ country.name }  </h2>
    <h2> Capital: ${ country.capital } </h2>
    <h2> Population: ${ country.population }</h2>
    <h2> Region: ${ country.region }</h2>
    <img  src ="${ country.flag }"alt="" width="200px">
    `;
      countryInfoDiv.style.display = 'inline-block';

}

