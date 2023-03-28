const express = require('express')

const productRoutes = require('./routes/product-routes')

const app = express()
app.use((req,res,next)=> {
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Headers","*")
  res.setHeader("Access-Control-Allow-Methods","*")
  next()
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
})

app.use('/api', productRoutes)

app.listen(8000)
