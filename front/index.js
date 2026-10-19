const API_URL = 'http://localhost:3000';

async function chargerMessage() {
    try {
        const res = await fetch(`${API_URL}/api/message`);
        const data = await res.json();
        document.getElementById('message').textContent = data.message;
    } catch (err) {
        document.getElementById('message').textContent = 'Erreur : serveur injoignable';
        console.error(err);
    }
}

chargerMessage();