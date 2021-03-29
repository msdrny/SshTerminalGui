const express = require("express");
const fs = require("fs");
const http = require("http");
var SSHClient = require("ssh2").Client;
var utf8 = require("utf8");
const app = express();


var portForNode1 = 8181;
var portForNode2 = 8182;
var portForNode3 = 8183;
var portForNode4 = 8184;
var portForNode5 = 8185;
var portForNode6 = 8186;
var portForNode7 = 8187;
var portForNode8 = 8188;
var portForIperfServer = 8189;
var portForMainServer = 8190;

var serverForNode1 = http.createServer(app);
var serverForNode2 = http.createServer(app);
var serverForNode3 = http.createServer(app);
var serverForNode4 = http.createServer(app);
var serverForNode5 = http.createServer(app);
var serverForNode6 = http.createServer(app);
var serverForNode7 = http.createServer(app);
var serverForNode8 = http.createServer(app);
var serverForIperf = http.createServer(app);
var serverForMain = http.createServer(app);


//set the template engine ejs
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

serverForNode1.listen(portForNode1);
serverForNode2.listen(portForNode2);
serverForNode3.listen(portForNode3);
serverForNode4.listen(portForNode4);
serverForNode5.listen(portForNode5);
serverForNode6.listen(portForNode6);
serverForNode7.listen(portForNode7);
serverForNode8.listen(portForNode8);
serverForMain.listen(portForIperfServer);
serverForIperf.listen(portForMainServer);

//socket.io instantiation
const ioForNode1 = require("socket.io")(serverForNode1);
const ioForNode2 = require("socket.io")(serverForNode2);
const ioForNode3 = require("socket.io")(serverForNode3);
const ioForNode4 = require("socket.io")(serverForNode4);
const ioForNode5 = require("socket.io")(serverForNode5);
const ioForNode6 = require("socket.io")(serverForNode6);
const ioForNode7 = require("socket.io")(serverForNode7);
const ioForNode8 = require("socket.io")(serverForNode8);
const ioForIperf = require("socket.io")(serverForIperf);
const ioForMain = require("socket.io")(serverForMain);

//Socket Connection

ioForNode1.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.110",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode2.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.120",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode3.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.130",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode4.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.140",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode5.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.150",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode6.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.160",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode7.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.170",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForNode8.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.180",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
      username: "ubuntu", // user name
      password: "IOIBellevue" // Set password or use PrivateKey
      // privateKey: require("fs").readFileSync("PATH OF KEY ") // <---- Uncomment this if you want to use privateKey ( Example : AWS )
    });
});

ioForIperf.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.105",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
	  username: "iperf", // user name
      password: "testhouse2021" // Set password or use PrivateKey
    });
});

ioForMain.on("connection", function(socket) {
  var ssh = new SSHClient();
  ssh
    .on("ready", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION ESTABLISHED ***\r\n");
      connected = true;
      ssh.shell(function(err, stream) {
        if (err)
          return socket.emit(
            "data",
            "\r\n*** SSH SHELL ERROR: " + err.message + " ***\r\n"
          );
        socket.on("data", function(data) {
          stream.write(data);
        });
        stream
          .on("data", function(d) {
            socket.emit("data", utf8.decode(d.toString("binary")));
          })
          .on("close", function() {
            ssh.end();
          });
      });
    })
    .on("close", function() {
      socket.emit("data", "\r\n*** SSH CONNECTION CLOSED ***\r\n");
    })
    .on("error", function(err) {
      console.log(err);
      socket.emit(
        "data",
        "\r\n*** SSH CONNECTION ERROR: " + err.message + " ***\r\n"
      );
    })
    .connect({
      host: "192.168.10.107",
      port: "22", // Generally 22 but some server have diffrent port for security Reson
	        username: "testhouse", // user name
      password: "testhouse2021" // Set password or use PrivateKey

    });
});
