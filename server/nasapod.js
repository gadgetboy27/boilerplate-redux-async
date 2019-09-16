const express = require('express')
const request = require('superagent')

const router = express.Router()

const apodUrl = 'https://api.nasa.gov/planetary/apod'

router.get('/:date', (req, res) => {
    const date = req.params.date

    request.get(apodurl)
    .query('api_key-DEMO_KEY')
    .query(`date-$(date)`) //add date to url
    .then(responce => {
        res.json(responce.body)
    })
    .catch(err => {
        console.error(err)
        res.status(500).send(err.message)
    })
})

module.exports = router