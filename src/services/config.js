
'use strict'

const HEROKU = process.env.HEROKU || 'https://aaaimx-api.herokuapp.com'
const LOCAL = process.env.LOCAL || 'http://localhost:3000'
const DEVELOPMENT = false

module.exports = DEVELOPMENT ? LOCAL : HEROKU
