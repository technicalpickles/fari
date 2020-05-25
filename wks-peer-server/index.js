const { PeerServer } = require("peer");

const port = 9000;
const path = "";
console.log("Starting Peer server");
const peerServer = PeerServer({ port: port, path: path, debug: true });
console.log("Started Peer server");
