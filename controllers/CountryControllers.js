const Country = require("../models/Country")

module.exports = {
    index: (req,res) => {
        Country.find({})
            .then(country => {
                res.json(country)
            })
    },

    showCountry: (req, res) => {
        Country.find({ name: req.params.name })
            .then(country => {
                res.json(country)
            })
    },

    showCapital: (req, res) =>{
        Country.find({capital: req.params.capital})
            .then(country => {
                res.json(country)
            } )
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