import NoxServer from "./NoxServer";

// Start the server or run tests
if (process.argv[2] !== "test") {
  let server = new NoxServer();
  server.start();
} else {
  null;
}
