// 載入express相關模組
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const Handlebars = require("handlebars")
const bodyParser = require('body-parser')
const generateAnnoy = require('./generate_annoy')
const port = 3000

// Handlebars-Helper
Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});


// 設定template模板
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定靜態檔案來源
// a. body-parser
app.use(bodyParser.urlencoded({ extended: true }))
    // b. JS與CSS檔
app.use(express.static('public'))



// 設定路由

// a.根目錄get
app.get('/', function(req, res) {
    // res.send(`This is annoy_generator`)
    res.render('index')
})

// b.根目錄post
app.post('/', function(req, res) {
    console.log('req.body', req.body)
    console.log('random annoyment is: ', generateAnnoy(req.body))
    const options = req.body
    const complaint = generateAnnoy(req.body)
    res.render('index', { complaint: complaint, options: options })
})

// 啟動伺服器
app.listen(port, function() {
    console.log(`Express is running on http://localhost:${port}`)
})