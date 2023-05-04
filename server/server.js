const app = require("./app");
const { PORT } = require("./config");

// Have the app listen on PORT 3001 form './config'
app.listen(PORT, function () {
    console.log(`Started on http://localhost:${PORT}`)
})

