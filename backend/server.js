const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");
const transactions = require("./routes/transactions");
const lessons = require("./routes/lessons");
const admin = require("./routes/admin");
const ai = require("./routes/ai");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/transactions", transactions);
app.use("/api/lessons", lessons);
app.use("/api/admin", admin);
app.use("/api/ai", ai);

app.listen(5000, () => console.log("Server running on 5000"));
