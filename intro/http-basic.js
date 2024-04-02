const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeCSS = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url)
  if(url === '/'){
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  else if(url === '/styles.css'){
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeCSS);
    res.end();
  }
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  else if (url === '/browser-app.js') { 
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
 
});
server.listen(3000);

