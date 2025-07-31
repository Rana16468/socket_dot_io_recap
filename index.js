const express = require("express");

const { Server } = require("socket.io");
const app = express();
const port = 3000;

const http = require("http");
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New User Connected");
  // server to client data transmition (client)

  // setTimeout(() => {
  //   socket.send({
  //     message: "send the data server to client section (server---> clinet)",
  //   });
  // }, 1000);

  const studentList = [
    {
      id: 1,
      name: "Sohel Rana",
      age: 25,
      inst: "Daffodil International University",
    },
    {
      id: 2,
      name: "Kaspia Hassan",
      age: 24,
      inst: " Daffodil International University",
    },
    {
      id: 3,
      name: " Abduallah Sahed",
      age: 19,
      inst: "Dhaka City Collage",
    },
  ];

  socket.emit("myevent", studentList);

  setInterval(() => {
    let d = new Date();
    let t = d.getTime();

    socket.send({
      timeinterval: t,
    });
  }, 2000);

  socket.on("disconnect", () => {
    console.log("user  disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
