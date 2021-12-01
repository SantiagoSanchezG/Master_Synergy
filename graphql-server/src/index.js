import express from "express";
import schema from "./schema";
import "./database";

const app = express();

const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql").graphqlHTTP;

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "It's Work!",
  });
});

app.listen(3100, () => console.log("Iniciando servidor en el puerto 3100"));
