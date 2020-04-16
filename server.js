const express = require('express')
const fetch = require('node-fetch');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
let variants = []

app.use(express.json())
app.use(cors())

//fetching information and saving it in variable variant
fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then(response => response.json())
  .then(data => {
    variants = data.variants
       
}).catch(()=>{console.log('Failed to fetch information')})

  //creating a route where the client can randomly retrieve the web link
  app.get('/api/link', (req, res) =>{
    let random = Math.random()
    if(random<.5)
        return res.json({web:variants[0]})
        return res.json({web:variants[1]})
})

app.listen(PORT, console.log("Server connected"))