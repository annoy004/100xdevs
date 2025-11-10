import express from "express";
import type { Request, Response } from "express";

import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
  connectionString:
    "postgresql://neondb_owner:npg_obWNtc5Y6DdH@ep-purple-hat-a4nf4zqa-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const insertQuery = `
      INSERT INTO users (username, email, password)
      VALUES ('${username}', '${email}', '${password}');
    `;

    const response = await pgClient.query(insertQuery);

    res.json({
      message: "You have signed up",
      result: response,
    });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
