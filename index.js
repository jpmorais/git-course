const http = require("node:http")


const server = http.createServer((req, res) => {
    res.write("Hello form the feature branch")
    res.end()
})


server.listen(8000, () => {
    console.log(`Server is listening on port 7000`)
})

