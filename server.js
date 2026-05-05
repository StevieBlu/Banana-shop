const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const PRICE_PER_BUNCH = 5;
const MAX_QTY = 100;

app.post("/checkout", (req, res) => {
  const qty = Number(req.body.quantity);

  if (!Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) {
    return res.status(400).json({
      error: `Quantity must be between 1 and ${MAX_QTY}`
    });
  }

  const total = qty * PRICE_PER_BUNCH;

  res.json({
    product: "Bananas",
    quantity: qty,
    total
  });
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});