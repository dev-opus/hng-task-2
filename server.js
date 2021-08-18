require('dotenv').config();

const server = require('./src/app');
const port = process.env.PORT || 1070;

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
