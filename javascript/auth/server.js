const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")

app.use(cors());
app.use(express.json());

const db = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'));

app.post('/user/create', (req, res) => {
    let {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({error: true, message: "Dados invalidos!"})
    }

    db.users.push({
        name, email, password
    });
    fs.writeFileSync('./db.json', JSON.stringify(db));
    res.send({message: 'Usuário criado com sucesso!'});
});

app.post('/user/access', (req, res) => {
    let { token } = req.headers;
    try {

        let decoded = jwt.verify(token, 'shhhhh');
        console.log(decoded.foo) // bar
    } catch(e) {
        return res.status(401).json(false)
    }

    res.json(true);
});

app.post('/user/login', (req, res) => {
    let { email, password } = req.body;
    let user = db.users.find(function(item) {
        return item.password === password && item.email === email;
    });
    if(!user) {
        return res.status(401).json({message: "Não autorizado!"})
    }

    let token = jwt.sign({email}, 'shhhhh');

    res.send({token});
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
