const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const country = document.getElementById('countries');
    country.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
        <div id="country">
            <h2>
                ${country.name.common}
            </h2>
            <img src='${country.flags.png}'>
        </div>
    `
}

loadCountries()