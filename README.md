# AI CRM SaaS

A full-stack AI-powered sales CRM based on the functionality and architecture demonstrated in the supplied tutorial transcript. This is an original implementation, not copied source code.

## Stack
- React 19 + Vite + Tailwind CSS v4
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs authentication
- Google Gemini via `@google/genai`
- Recharts, Axios, Lucide React and Sonner

## Features
- Registration, login and persistent JWT sessions
- Owner-scoped multi-user data isolation
- Dashboard analytics and six-month lead trend
- Leads CRUD, search, filters and pipeline ordering
- AI lead summary, risk score, priority and next-best action
- AI sales email generation
- AI pipeline sales insights
- Contacts with search, tags and favorites
- Notes linked to leads/contacts and pinning
- Follow-up tasks with completed timestamps
- Five-stage visual sales pipeline
- Demo data seeding

## Run locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Set MONGODB_URI and JWT_SECRET. GEMINI_API_KEY enables AI features.
npm run seed
npm run dev
```

The API runs on `http://localhost:8000`.

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The Vite app runs on `http://localhost:5173`.

### Demo account
After seeding:
- Email: `demo@ai-crm.local`
- Password: `Test1234`

The demo account is intended for local development/testing. Change or remove it before production use.

## Environment
Never commit real `.env` files, database credentials, JWT secrets or Gemini API keys. Use the supplied `.env.example` files as templates.
