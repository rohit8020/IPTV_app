const express = require('express')
const app = express()

const channels= require('./channels.json')

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index", {channels: channels})
})
app.get('/:id',(req,res)=>{
    let index=req.params.id
    let data
    try{
      data=channels[index]
    }catch{
      console.log("error!")
    }finally{
      if(data){
        res.render("videoplayer",{data: data["vidsrc"]})
      }
    } 
})

app.listen(process.env.PORT,process.env.IP, () => {
  console.log(`IPTV-SERVER STARTED!`)
})