const express = require('express');

const {Server}=require("socket.io");
const app = express()
const port = 3000

 const http=require('http');
 const  server=http.createServer(app);

 const io= new Server(server);


 io.on("connection",(socket)=>{
    console.log("New User Connected");

    socket.on("disconnect",()=>{

        console.log("user  disconnected")

    })
 })


app.get('/', (req, res) => {
     res.sendFile(__dirname + "/index.html");
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
