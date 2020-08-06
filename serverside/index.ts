import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join('../clientside/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join('../clientside/build', 'index.html'));
});

app.listen(9000, () => {
  console.log("Server is running");
});