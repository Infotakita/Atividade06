const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// Utilizar arquivos estáticos
app.use(express.static('public'))

// Array para armazenar os nomes cadastrados
const nomesCadastrados = []

app.post('/users/save', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade

  

    
})




app.get('/', (req, res) => {
    // Renderizar os nomes cadastrados na página
    const nomesHTML = nomesCadastrados.map(nome => `<p>${nome}</p>`).join('')
    const pageContent = `
        <h1>Bem-vindo ao Time de Futebol</h1>
        <p>Descubra as últimas notícias e informações sobre o seu time favorito.</p>
        <a href="/cadastro">Cadastrar-se</a>
       
        ${nomesHTML}
    `
    res.send(pageContent)
})

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/public/cadastro.html');
});

app.post('/cadastro', (req, res) => {
    // Lógica para processar a solicitação POST aqui
    res.render('home')
});

app.get('/', (req, res) => {
    res.render('users')
})
app.listen(5000, () => {
    console.log('Servidor está rodando na porta 3000')
})