import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // allow frontend requests

// 🔑 Replace with your Mailchimp details
const API_KEY = "13f3efd0baf85f80930da803a22fa69a-us19"; // e.g. 13f3efd0baf85f80930da803a22fa69a-us19
const AUDIENCE_ID ="6aef276497" ; // e.g. 6aef276497
const DATACENTER = "us19"; // part after the dash in your API key

// Subscription route
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const data = await response.json();

    if (response.status >= 400) {
      return res.status(400).json({ error: data.detail || "Mailchimp error" });
    }

    res.json({ message: "✅ Subscription successful!" });
  } catch (err) {
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

app.listen(5000, () =>
  console.log("🚀 Backend running at http://localhost:5000")
);
