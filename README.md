# 🚀 UX Insight Landing Page

A simple and elegant React + Tailwind landing page that uses OpenAI's GPT model to generate UX improvement suggestions and sends them to a user email via EmailJS SMTP.

> ✅ Built for practice and real-world client applications on platforms like Upwork.

---

## ✨ Features

- ⚛️ **React + TailwindCSS** frontend
- 🤖 **GPT-4o (or GPT-3.5) integration** via secure Node.js Express backend
- 💌 Email delivery using **EmailJS SMTP**
- 🔐 Secure `.env`-based configuration (no API keys exposed to frontend)
- 🧪 **Mock mode** available for demo purposes
- 🌐 Easily deployable to **Vercel (frontend)** and **Railway (backend)**

---

## 📸 Demo

> [🌐 Live Demo](https://your-vercel-url.vercel.app)  
> Backend powered by: `Express + OpenAI SDK`

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| React | UI components |
| Tailwind CSS | Styling |
| OpenAI | GPT-powered UX insights |
| EmailJS | SMTP email delivery |
| Express | Backend API |
| Vercel | Frontend deployment |
| Railway | Backend deployment |

---

## 📦 Setup (Dev)

### 1. Clone the repo:

```bash
git clone https://github.com/yourusername/ux-insight-landing.git
cd ux-insight-landing
```

### 2. Setup backend

```bash
cd server
cp .env.example .env
npm install
npm start
```

### 3. Setup frontend

```bash
cd ../client
cp .env.example .env
npm install
npm start
```

---

## 🔐 Environment Variables

### `/server/.env`

```env
OPENAI_API_KEY=your_openai_key_here
USE_MOCK=true
```

### `/client/.env`

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

> 📌 **Never commit real `.env` files to GitHub.** Use `.env.example` to share config structure.

---

## 🧪 Mock Mode (safe public demo)

Mock mode skips GPT calls and returns hardcoded insights.
Use it for safe Upwork/public demo deployment:

```js
// server/index.js
const USE_MOCK = process.env.USE_MOCK === "true";
```

Enable or disable it via your `.env`:

```env
USE_MOCK=true
```

---

## ✅ To Do / Improvements

- [ ] Add rate-limiting or captcha
- [ ] Better form validation (regex, debounce)
- [ ] Mobile UI polish
- [ ] Optional multiple languages support

---

## 📬 Contact

Have questions or feedback?  
📨 [andrii@example.com](mailto:andrii@example.com)  
💼 [My Upwork Profile](https://www.upwork.com)

---

> Made with ❤️ by [@andrii-dev](https://github.com/AndriiSaveliev)
