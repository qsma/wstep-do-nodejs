const express = require("express");
const bodyParser = require("body-parser");
const Joi = require("joi");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "home" });
});

app.get("/about", (req, res) => {
  res.json({ message: "about" });
});

app.post("/newsletter", (req, res) => {
  console.log(req.body);

  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.details);
  }

  console.log(`Data from req: ${value}`);

  res.json({ message: "newsletter" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(5000, () => {
  console.log("server run on port 5000");
});
