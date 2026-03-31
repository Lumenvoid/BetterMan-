const API_URL = 'http://45.13.236.245:3001/config'; // vervang door je VPS IP en poort

const moderation = document.getElementById('moderation');
const tickets = document.getElementById('tickets');
const welcome = document.getElementById('welcome');
const save = document.getElementById('save');

// Haal huidige config op bij openen
async function loadConfig() {
  const res = await fetch(API_URL);
  const data = await res.json();
  moderation.checked = data.moderation;
  tickets.checked = data.tickets;
  welcome.checked = data.welcome;
}

loadConfig();

// Save button
save.addEventListener('click', async () => {
  const config = {
    moderation: moderation.checked,
    tickets: tickets.checked,
    welcome: welcome.checked
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(config)
  });

  alert('Settings saved!');
});
