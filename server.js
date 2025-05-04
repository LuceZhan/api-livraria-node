import http from "http";

const PORT = 3000;

const rotas = {
  "/": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Help\n");
  },
  "/sobre": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Sobre\n");
  },
  "/contato": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contato\n");
  },
};
const server = http.createServer((req, res) => {
  const rota = rotas[req.url];
  if (rota) {
    rota(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(3000, () => {
  console.log('O servor está escutando na porta 3000');
});
