const fs = require("fs");

fs.writeFile("message.txt", "My data", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

// fs.rm("message.txt", (err) => {
//   if (err) throw err;
//   console.log("removed");
// });

// like rm -rf
fs.rm("message.txt", { recursive: true, force: true }, (err) => {
  if (err) throw err;
  console.log("removed");
});
