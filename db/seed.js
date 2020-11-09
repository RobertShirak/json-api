const data = require('./data.json');
const Country = require('../models/Country.js');


const countryData = data.map(item => {
    let country = {};
    country.name = item.name
    country.capital = item.capital
    country.region = item.region
    country.population = item.population
    country.flag = item.flag
    return country;
})


Country.deleteMany({})
.then(()=> {
    Country.create(countryData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
})