# BooRoad – Backend
===
Backend del progetto BooRoad sviluppato con Express.js.  
Gestisce le API per viaggi, partecipanti e contatti.

## Avvio

npm install
npm run dev

Server attivo su http://localhost:3001

## Struttura

data/               # Mock data (trips, participants)
routes/             # Definizione API
app.js              # Entry point

## Endpoints

### Trips
- GET /api/trips
- GET /api/trips/:id

### Participants
- GET /api/participants
- POST /api/participants

### Contact
- GET /api/contact/test
- POST /api/contact