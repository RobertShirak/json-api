const fetch = require('node-fetch');

const url = 'https://restcountries.eu/rest/v2/all';

const fs = require('fs');


fetch(url)
    .then(res => res.json())
    .then(countries => {
        let newCountries = JSON.stringify(countries)
        fs.writeFile('./db/data.json', newCountries, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })