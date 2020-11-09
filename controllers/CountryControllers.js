const Country = require("../models/Country")

module.exports = {
    index: (req,res) => {
        Country.find({})
            .then(country => {
                res.json(country)
            })
    },

    showCountryRegion: (req, res) => {
        Country.find({ region: req.params.region })
            .then(country => {
                res.json(country)
            })
    },

    create: (req, res) => {
        console.log(req)
        Country.create(req.body)
            .then(country => {
                console.log(req.body)
                res.json(country)
            })
    },

    edit: (req, res) => {
        Country.findOneAndUpdate(
            {name: req.params.name},
            req.body,
            {new:true})
            .then(country => {
                res.json(country)
            })
    },

    delete: (req, res) => {
        Country.findOneAndDelete({name: req.params.name})
            .then(country => {
                res.json(country)
            })
    }

}