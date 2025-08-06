# FARMDEPOT

**FARMDEPOT** is an AI-powered classified ads web app for buying and selling agricultural products.  
It features multilingual voice assistance, crop recommendations, real-time market price prediction, robust product listings, and user dashboards.

## Features

- Voice-enabled multilingual interface (Hausa, Yoruba, Igbo, Origin, English)
- AI-powered crop recommendation system
- Real-time market price prediction
- Classified ad posting and product matching
- User dashboard for managing listings, sales, recommendations
- Accessible UI/UX with theme colors: `#b21823` and `#8c128a`

## Project Structure

```
backend/           # FastAPI backend
frontend/          # React frontend
streamlit_dashboard/ # Streamlit admin/AI dashboard
```

## Getting Started

### Backend

```sh
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```sh
cd frontend
npm install
npm start
```

### Streamlit Dashboard

```sh
cd streamlit_dashboard
streamlit run dashboard.py
```

## Deployment

- Frontend: Vercel
- Backend: Railway, Render, or Fly.io
- Streamlit: Streamlit Cloud

---

For more details, see individual module documentation.