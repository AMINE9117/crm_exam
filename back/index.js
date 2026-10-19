require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connecté'))
    .catch((err) => console.error('Erreur MongoDB :', err.message));

app.get('/', (req, res) => {
    res.send('Hello from back, je suis Amine Nfissi - le serveur marche');
});

app.get('/login', (req, res) => {
    res.send('Bienvenue sur la route login');
});

app.get('/sign-up', (req, res) => {
    res.send('Bienvenue sur la route sign up');
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Connexion Front-Back réussie' });
});

if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
}

module.exports = app;