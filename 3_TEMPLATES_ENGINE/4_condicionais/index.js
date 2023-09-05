const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

//configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        nome: "Tiago",
        idade: 25,
        email: "tiago.quintanilha@gmail.com"
    }

    const auth = false

    res.render('home', {user, auth})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})