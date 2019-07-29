const jsonServer = require("json-server");
const server = jsonServer.create();
const db = require("./db");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3009;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
