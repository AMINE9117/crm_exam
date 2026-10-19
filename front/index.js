const API_URL = 'http://localhost:3000';

async function chargerMessage() {
    const zone = document.getElementById('message');
    try {
        const res = await fetch(`${API_URL}/api/test`);
        const data = await res.json();
        zone.textContent = data.message;
    } catch (err) {
        zone.textContent = 'Erreur : serveur injoignable';
        console.error(err);
    }
}

chargerMessage();