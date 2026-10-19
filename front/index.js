const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
const API_URL = isLocal
    ? 'http://localhost:3000'
    : 'https://aminenfissiback.vercel.app';

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