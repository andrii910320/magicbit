import { find_user } from "./users/index";
import express from "express";
import { stringify } from "querystring";
import cors from "cors";
const app = express();

const PORT = +process.env.PORT! || 8888;
// app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "http://127.0.0.1:3000"] }));

app.get("/users", (req, res) => {
  const email = req.query.email?.toString() ?? "";
  const number = req.query.number?.toString() ?? "";

  setTimeout(() => {
    if (!email) {
      res.status(400).send("Fields email is required");
    }
    const user = find_user(email, number);
    if (!user) {
      res.status(404).send("User is not exit");
    } else {
      res.set("Referrer-Policy", "strict-origin-when-cross-origin");
      res.send(JSON.stringify(user));
    }
  }, 5000);
});

app.listen(PORT, "localhost", (error?: any) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
