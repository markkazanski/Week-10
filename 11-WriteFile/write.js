var file = require("fs");

file.writeFile("stuff.txt", "foo\r\nbar\r\nmonkeys\r\napples", function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("txt file written");

});
