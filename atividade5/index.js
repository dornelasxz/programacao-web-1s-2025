const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const validarAgendamento = require('./validators/agendamentoValidator');

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
    res.render('agendamento');
});

app.post('/agendamento', validarAgendamento, (req, res) => {
    // Se chegou aqui, significa que todas as validações passaram
    res.json({ 
        success: true, 
        message: 'Agendamento realizado com sucesso!',
        data: req.body 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});