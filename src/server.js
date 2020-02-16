import express from "express"
import App from './App'
import React from 'react'
import {renderToString} from 'react-dom/server'
import fs from 'fs'

var app = express();

app.get("/", (req, res) => {
  const html = fs.readFileSync('./build/index.html')
  const content = renderToString(<App />)
  res.send(html.toString().replace('<div id="root"></div>', `<div id="root">${content}</div>`))
})

app.use('/', express.static('build'))

app.listen(3000, function () {
  console.log('server start !')
})
