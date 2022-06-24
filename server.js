const http = require('http')

const port = 4356

http
  .createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    console.log(req.url)
    if (req.url === '/yado') {
      res.end(
        JSON.stringify(
          [...Array(10)].map((v, i) => {
            return {
              key:v,
              num: (Math.random() * i).toString(16).slice(-8),
              book_num1: `yado-${i}`,
              book_name: `yado-${i}-yado`,
              username1:(Math.random() * i).toString(16).slice(-8),
              borrow_date:`${i}`,
              return_date:`${i}`
            }
          }),
        ),
      )
    } else {
      res.end(JSON.stringify({ a: 1, url: req.url }))
    }
  })
  .listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/`)
  })