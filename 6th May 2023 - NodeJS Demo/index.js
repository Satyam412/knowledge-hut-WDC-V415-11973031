var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h1>Hello</h1>");
    // res.write("<p>This is some content</p>");
    // res.write("<button>Click</button>");

    fs.writeFile(
      "quote.txt",
      "Be indifferent to how bright the light",
      function (err) {
        if (err) throw err;
        console.log("Created!");
      }
    );

    fs.appendFile("quote.txt", " is shining.", function (err) {
      if (err) throw err;
      console.log("Updated!");
    });

    fs.readFile("quote.txt", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (err) throw err;
      res.write("<blockquote>" + data + "</blockquote>");
      return res.end();
    });

    fs.rename("quote.txt", "newQuote.txt", function (err) {
      if (err) throw err;
      console.log("Renamed!");
    });

    // fs.unlink("quote.txt", function (err) {
    //   if (err) throw err;
    //   console.log("Deleted!");
    // });
  })
  .listen(3000);

// Output ->  http://localhost:3000/

//  Task : Create a new file 'quote.txt' which contains the text - "Be indifferent to how bright the light". Then, update the file to add the remaining quote : " is shining.". Then, display is using blockquote in HTML.
