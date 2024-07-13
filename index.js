const express = require('express');
const swaggerui = require('swagger-ui-express');
const swaggerdoc = require('./docs/swagger.json');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerdoc));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
