require("dotenv").config({ path: ".env" });
const databaseConnect = require("./dbConnection");

const app = require("./appConfig");

try {
  databaseConnect();
} catch (error) {
  console.log(err);
}

let port = process.env.PORT;

app.listen(port, () => {
  console.log(`the sever is running on port ${port}`);
});

module.exports = app;
