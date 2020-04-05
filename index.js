const app = require("./server");
//require("dotenv").config();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
