const express = require('express');

const app = express();

app.get('/usuarios', (req, res)=>{
    const user = [
        {id: 11, nome: 'Joao', idade: 23},
        {id: 2, nome: 'Maria', idade: 18},
        {id: 4, nome: 'Ana', idade: 30},
        {id: 1, nome: 'Rodrigo', idade: 17},
        {id: 23, nome: 'Rodrigo', idade: 17}
    ]
    
    res.send(user);
});

app.listen(3000);