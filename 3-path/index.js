const path = require("path");

const file = path.resolve(__dirname, "test.txt");

const filename = path.basename(file);
const ext = path.extname(file);

console.log({ file, filename, ext });
