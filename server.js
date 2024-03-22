const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const fileUpload = require("express-fileupload");

const port = 5050;

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

const pollRoutes = require("./routes/pollRoutes");

mongoose
  .connect(
    "mongodb+srv://mongoctadmin:mongodb%4099@cointoppercluster.l267mfi.mongodb.net/farcaster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/polls", pollRoutes);

app.listen(port, () =>
  console.log(`Server started on port: http://localhost:${port}`)
);
