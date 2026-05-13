const express = require("express")
const app = express()
const port = 3000

app.get("/api", (req, res) => {
  const date = new Date()

  res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
})

app.get("/api/:date", (req, res) => {
    const dateString = req.params.date

    let date
    if(/^\d+$/.test(dateString)){
        date = new Date(parseInt(dateString))
    }
    else{
        date = new Date(dateString)
    }

    if (date.toString() === "Invalid Date"){
        return res.json({error: "Invalid date",})
    }

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
})
app.listen(port, () =>{
    console.log(`Server port running on port ${port}`)
})