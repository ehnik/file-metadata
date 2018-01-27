const express = require('express')
const multer  = require('multer')
const upload = multer()

const app = express()

app.use(express.static('assets'))

//serves html landing page with file uploader
app.get('/', (req,res)=>res.send("./public/index.html"))

//parses uploaded file and returns file size
app.post('/', upload.single('file'), (req,res,next)=> {
  res.setHeader('Content-Type', 'application/json');
  let response = req.file ? {size: req.file.size} : "No file submitted"
  res.send( JSON.stringify(response) )
})

app.listen(3000)
