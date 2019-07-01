const express = require('express');
const app = express();

app.get('/home',(req, res) => {
    const {nome, salario, horasTrabalhadas} = req.query;
    console.log(nome);
    res.send(`Pagina home ${nome} ${salario} ${horasTrabalhadas}`);
});

app.get('/resposta',(req, res) => {
    res.send("Resposta");
});

app.listen(80, () => {
    console.log("servidor online");
});