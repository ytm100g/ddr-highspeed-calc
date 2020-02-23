const express = require("express")
const app = express()

app.use(express.static("public"));
app.listen(33999, () => console.log(
  "application start"
));