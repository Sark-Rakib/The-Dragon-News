# 🐉 The Dragon News

A modern, responsive **React-based news web application** built with Vite, Tailwind CSS, DaisyUI, and Firebase Authentication. It features a clean card-based UI, smooth scroll animations, category-based news filtering, and a full light/dark mode.

## 🚀 Features

- **Light & Dark Mode** — Theme toggle in the navbar, persisted to `localStorage` and following system preference by default.
- **Homepage Layout** — 3-column layout (left categories, main news feed, right sidebar) with a live date/time header and a scrolling news ticker (marquee).
- **Category Filtering** — Browse news by category via `/category/:id`.
- **News Cards** — Rich cards showing author info, publish date, rating (stars), total views, bookmark & share icons, and a "Read More" link.
- **News Details** — Full article view at `/news-details/:id` (protected route).
- **Authentication** — Login/Register with Firebase email/password, plus Google & GitHub social login.
- **Private Route** — News details require authentication; redirects to login otherwise.
- **Responsive Design** — Mobile-friendly with a collapsible navigation menu.
- **Animations** — AOS (Animate On Scroll) for smooth entrance animations.

## 🧩 Tech Stack

- **React 19** — component-based UI
- **Vite 7** — fast build tooling & HMR
- **React Router v7** — routing
- **Tailwind CSS 4** — utility-first styling
- **DaisyUI 5** — pre-built UI components & themes
- **Firebase** — authentication
- **React Icons** — icons
- **AOS** — scroll animations
- **react-fast-marquee** — news ticker
- **date-fns** — date formatting

## 📁 Project Structure

```
src/
├── main.jsx                  # App entry, router + providers
├── App.jsx
├── index.css                 # Tailwind, DaisyUI themes, global styles
├── Pages/
│   ├── Homes.jsx             # Redirect to /category/0
│   └── CategoryNews.jsx      # Category-filtered news list
└── Components/
    ├── Layout/Home.jsx       # Main 3-column layout
    ├── Header/               # Logo + live date/time
    ├── Navbar/               # Nav + theme toggle + auth buttons
    ├── LastestNews/          # Marquee news ticker
    ├── HomeLayout'/          # Categories, SocialLogin (asides)
    ├── NewsCard/             # Reusable news card
    ├── NewsDetails/          # Full article view
    ├── AuthLayout/           # Auth pages wrapper
    ├── AuthProvider/         # Firebase auth context
    ├── ThemeProvider/        # Dark/light theme context
    ├── Login/                # Login page
    ├── Register/             # Register page
    ├── PrivateRoute/         # Route guard
    ├── firebase.init.js      # Firebase config
    └── ...                   # FindUs, Zone, Background, Loading, AosAnimation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Firebase project with Authentication enabled

### Installation

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd The-Dragon-News

# 2. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with your Firebase config:

```
VITE_apiKey=your-api-key
VITE_authDomain=your-auth-domain
VITE_projectId=your-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-sender-id
VITE_appId=your-app-id
```

### Run

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

## 🌙 Dark Mode

The app includes a built-in light/dark theme system:

- Click the **sun/moon** icon in the navbar to toggle between light and dark mode.
- Your preference is saved to `localStorage` and applied on the next visit.
- If no preference is saved, the app follows your **system** color scheme (`prefers-color-scheme`).
- The theme is applied globally via a `data-theme` attribute on the `<html>` element, using DaisyUI's `light` and `dark` themes.

## 🔗 Routes

| Path                | Description                     |
| ------------------- | ------------------------------- |
| `/`                 | Home (redirects to category 0)  |
| `/category/:id`     | News filtered by category       |
| `/news-details/:id` | Full article (protected)        |
| `/about`            | About page                      |
| `/career`           | Career page                     |
| `/auth/login`       | Login                           |
| `/auth/register`    | Register                        |

## 📜 Data

- **`public/news.json`** — news articles (loaded via route loaders).
- **`public/categories.json`** — news categories (used for the left sidebar).

## 📄 License

This project is for educational/portfolio purposes.
