# Harani Gayathri — Portfolio (MERN)

A modern, responsive personal portfolio built with React (Vite) on the
frontend and an Express + MongoDB API on the backend that stores contact
form submissions.

## Folder structure

```
portfolio-mern/
├── client/                     # React (Vite) frontend
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env.example
│   ├── public/
│   │   └── resume.pdf          # ← add your real resume here
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css           # design tokens, resets, utilities
│       ├── data/
│       │   ├── skills.js
│       │   └── projects.js
│       └── components/
│           ├── Loader.jsx / .css
│           ├── Navbar.jsx / .css
│           ├── Hero.jsx / .css        (Home)
│           ├── About.jsx / .css
│           ├── Skills.jsx / .css
│           ├── Projects.jsx / .css
│           ├── Contact.jsx / .css
│           ├── Footer.jsx / .css
│           └── ScrollTop.jsx / .css
│
├── server/                     # Express + MongoDB backend
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── config/db.js
│   ├── models/Contact.js
│   ├── controllers/contactController.js
│   ├── routes/contactRoutes.js
│   └── middleware/errorHandler.js
│
└── README.md
```

## Prerequisites

- Node.js 18+ and npm
- A MongoDB database — either:
  - Local MongoDB running on `mongodb://127.0.0.1:27017`, or
  - A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (recommended if you don't want to install MongoDB locally)

## 1. Backend setup

```bash
cd server
npm install
cp .env.example .env
```

Open `.env` and set `MONGO_URI` to your database connection string
(local or Atlas). Then start the API:

```bash
npm run dev      # with nodemon (auto-restart)
# or
npm start        # plain node
```

The API runs at `http://localhost:5000`. Confirm it's up:

```bash
curl http://localhost:5000/api/health
```

## 2. Frontend setup

Open a second terminal:

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

The site runs at `http://localhost:5173`. The Vite dev server proxies
`/api/*` requests to the Express server automatically (see
`client/vite.config.js`), so the contact form works out of the box.

## 3. Add your content

- **Resume**: drop your PDF at `client/public/resume.pdf` (the "Download
  Resume" button already links to `/resume.pdf`).
- **Profile photo**: the hero avatar is currently initials on a gradient
  circle — swap it for an `<img>` in `client/src/components/Hero.jsx` once
  you have a photo.
- **Projects / links**: edit `client/src/data/projects.js` and
  `client/src/data/skills.js`.
- **Social + contact links**: update the arrays/links in `Hero.jsx`,
  `Contact.jsx`, and `Footer.jsx`.

## 4. Production build

```bash
cd client
npm run build      # outputs static files to client/dist
```

Deploy `client/dist` to any static host (Vercel, Netlify, GitHub Pages),
and deploy `server/` to a Node host (Render, Railway, Fly.io) with your
`MONGO_URI` and `CLIENT_ORIGIN` (your deployed frontend URL) set as
environment variables there.

## Notes on design decisions

- **Theme**: dark/light mode is toggled via a `data-theme` attribute on
  `<html>` and persisted in `localStorage`.
- **Animations**: scroll-reveal uses `IntersectionObserver` (see
  `App.jsx`); it's disabled automatically for users with
  `prefers-reduced-motion` set (see `index.css`).
- **Accessibility**: semantic landmarks, visible focus states, labeled
  form fields with `aria-invalid`/`aria-describedby`, and alt/aria labels
  on icon-only controls.
- **Contact form**: client-side validation runs first; the same data is
  re-validated by the Mongoose schema on the server before it's stored.
