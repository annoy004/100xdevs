import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());   // ⬅ REQUIRED

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "signup successful",
    id: user.id,
  });
});

app.listen(3002);
