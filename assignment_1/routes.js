const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.writeHead(200, { "content-type": "html" });
    res.write("<html>");
    res.write("<h1>Hello from the server</h1>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"></input><button>Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (method === "POST" && url === "/create-user") {
    console.log("form sub");
    let user = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      user.push(chunk);
      console.log(user);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(user).toString();
      const userName = parsedBody.split("=")[1];
      console.log(`Hi ${userName}`);
      return res.end();
    });
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<ul><li>User 1</li></ul>");
    res.write("<ul><li>User 2</li></ul>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = requestHandler;
