import express from "express";
import { connect, Schema, model } from "mongoose";

const app = express();

const mongo_url =
  "mongodb+srv://rahulvarma5297:rahulvarma@cluster0.sgtf0nt.mongodb.net/cc?retryWrites=true&w=majority";

connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema_2 = new Schema({
  type: Number,
});

const Model = model("Model", Schema_2);

app.get("/", (req, res) => {
  Model.find({}).then((data) => {
    if (data.length === 0) {
      let t = 0;
      res.send(`${t.toFixed(4)}`);
      return;
    }
    let Total = 0;
    for (let i = 0; i < data.length; i++) {
      Total += data[i].type;
    }
    let Average = Total / data.length;
    res.send(`${Average.toFixed(4)}`);
  });
});

app.listen(8000, () => {
  console.log("Service 2 is Running on port 8000");
});
