const http = require("http");

const server = http.createServer((req, res) => {
  const urlPart = req.url;

  switch (urlPart) {
    case "/":
      res.write("home");
      break;
    case "/about":
      res.write("about");
      break;
    default:
      res.writeHead(404);
      res.write(JSON.stringify({ message: "404" }));
  }

  res.end();
});

server.listen(5000, () => {
  console.log("server listen on port 5000");
});
