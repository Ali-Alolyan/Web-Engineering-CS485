const router = require('express').Router()

app.all('*', requireAuthentication, loadUser)

