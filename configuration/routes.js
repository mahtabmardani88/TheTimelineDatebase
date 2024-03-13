const express = require('express')
const routes = express.Router()
const articleFun = require('./TheTimelineDatabase/postControl')


routes.get('/home', articleFun.getHomePage)

routes.post('/home', articleFun.createArticle)
routes.get('/home/:id', articleFun.getFullArticle)


module.exports = routes 