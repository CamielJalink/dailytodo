import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join('../clientside/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join('../clientside/build', 'index.html'));
});

app.listen(Number(process.env.PORT) || 9000, process.env.IP || '', () => {
  console.log("Server is running");
});