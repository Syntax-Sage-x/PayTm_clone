const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())

const rootRouter = require("./routes/index")
app.use("/api/v1", rootRouter)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})