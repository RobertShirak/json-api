const express = require("express");
const app = express();
const CountryControllers = require('./controllers/CountryControllers')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

////root
app.get("/", CountryControllers.index);
////find
app.get("/:name", CountryControllers.findCountry);
////create
app.post("/", CountryControllers.create);
////update
app.put("/country/:name", CountryControllers.edit);
////delete
app.delete("/delete/:name", CountryControllers.delete);



// from lecture

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});