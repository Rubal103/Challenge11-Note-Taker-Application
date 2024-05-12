const express = require('express');
const htmlRoutes = require('./routes/html-routes')
const apiRroutes = require('./routes/api-routes')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRroutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});