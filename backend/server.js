const app = require('./app')

const PORT = 5050

const server = app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
  })
  