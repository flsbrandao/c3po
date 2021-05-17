const app = require('./config/custom-express');

app.listen(process.env.PORT || 3000, () => {
  console.log('Running the server...');
});