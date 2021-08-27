const net = require("net");
const chatServer = net.createServer();
const clientList = [];
chatServer.on("connection", (client) => {
  client.write("HI\n");
  clientList.push(client);
  client.on("data", (data) => {
    console.log("receive:", data.toString());
    clientList.forEach((v) => {
      if (v !== client) {
        v.write(data);
      }
    });
  });
});
chatServer.listen(9000);
