// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Banco de dados em memória
let estoque = [];

// Rota para adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    
    // Verifica se o produto já existe
    const produtoExistente = estoque.find(p => p.id === id);
    
    if (produtoExistente) {
        return res.status(400).send('Produto já existe no estoque');
    }
    
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

// Rota para listar produtos
app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.send('Estoque vazio');
    }
    
    res.json(estoque);
});

// Rota para remover produto
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const index = estoque.findIndex(p => p.id === id);
    
    if (index === -1) {
        return res.status(404).send('Produto não encontrado');
    }
    
    const produtoRemovido = estoque.splice(index, 1);
    res.send(`Produto ${produtoRemovido[0].nome} removido com sucesso!`);
});

// Rota para editar quantidade
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(p => p.id === id);
    
    if (!produto) {
        return res.status(404).send('Produto não encontrado');
    }
    
    produto.quantidade = parseInt(qtd);
    res.send(`Quantidade do produto ${produto.nome} atualizada para ${qtd}`);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});