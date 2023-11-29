const app = require('./app')

const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://AbhishekPadiyar:ripperpubg1234@cluster0.dimd4wk.mongodb.net/CollegeNav",{
    useNewUrlParser: true,
  });
  console.log("database connected");
}

const PORT = 5050

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
  })
  