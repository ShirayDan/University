const express = require('express')
const path = require('path') // Потрібно для роботи з шляхами файлів
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'pages')))
// Роути для різних сторінок
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'portfolio.html'))
})

app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'skills.html'))
})

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`)
})
