import express from "express";
import { connect, Schema, model } from "mongoose";

const app = express();

const mongo_url = 
"mongodb+srv://rahulvarma5297:rahulvarma@cluster0.sgtf0nt.mongodb.net/cc?retryWrites=true&w=majority";

connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema_1 = new Schema({
  type: Number,
});

const Model = model("Model", Schema_1);

app.get("/", (req, res) => {
  let value = req.query.msg;
  let float_value = parseFloat(value);

  if (typeof float_value === "number" && !isNaN(float_value)) {
    const data = new Model({
      type: value,
    });
    data.save();
  }
  res.send(`Entered ${value}`);
});

app.listen(5000, () => {
  console.log("Service 1 is Running on port 5000");
});
