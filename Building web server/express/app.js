const take = require("express");

const app = take();

const PORT = 1552;

app.listen(PORT, (err) => {
    console.log("Server listens at port 1552");
})

app.use(take.static("ResponsiveWeb"));