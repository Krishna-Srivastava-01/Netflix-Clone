# 🍿 Netflux: Premium Streaming UI Clone

![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Netflux** is a high-fidelity, interactive front-end clone of the world's most popular streaming platform. Built entirely from scratch using **React**, **Vite**, and **Vanilla CSS**, this project aims to faithfully recreate the premium user experience, micro-animations, and aesthetic design language of a modern enterprise application.

Data is populated dynamically in real-time via the [OMDB API](https://www.omdbapi.com/).

---

## 📸 Key Features & Highlights

### 1. 🎨 Authentic UI/UX & Theming
- **Precision Styling:** Uses true brand hex codes (e.g., `--bg: #141414`, `--red: #e50914`), typography (`Helvetica Neue`), and aspect-ratio locked (`2/3`) movie posters.
- **Light/Dark Mode Integration:** A robust theming system built on CSS custom properties (variables). Toggling the theme completely shifts the application's mood without any layout jumps.
- **Dynamic Navbar:** Replicates the iconic scrolling behavior. The navigation bar begins as a transparent gradient over the hero image and smoothly transitions to a solid dark/light background as the user scrolls down the page.
- **Account Dropdown:** Fully styled, hover-based interactive account and settings menu in the navigation bar.

### 2. 🎬 Dynamic Interactions & Animations
- **Advanced Z-Index Management:** Movie cards scale up and cast deep box shadows on hover. Custom CSS `transition-delay` logic ensures that when a card shrinks back down, it stays visually on top of adjacent cards until the animation completes, preventing visual glitching.
- **Skeletons & Shimmer Effects:** Data fetching is accompanied by CSS-animated shimmer skeletons, entirely eliminating jarring layout shifts when images and titles render.
- **Glassmorphism Elements:** Modal overlays, hero gradients, and dropdown menus utilize `backdrop-filter: blur` and layered RGBA gradients to achieve a premium frosted-glass aesthetic.

### 3. 🔍 Powerful Search & Filtering
- **Real-Time Querying:** A dedicated search interface replaces the main dashboard when a user begins typing.
- **Debounced Fetching:** Network requests to the OMDB API are intelligently delayed using `setTimeout` within React's `useEffect` to prevent API rate limiting and ensure performance.
- **Content Pills:** Users can instantly filter fetched results by specific media types (`Movies`, `Series`, `Episodes`).

### 4. 🗂 Detailed Data Presentation
- **Hero Section:** Dynamically selects a featured "Trending" film to display in a massive top banner, complete with interaction buttons.
- **Movie Modal:** Clicking any card opens a beautifully structured, responsive modal containing rich metadata (Plot, Genre tags, Box Office, IMDb Ratings, Awards, and Runtime).

---

## 🏗️ Architecture & State Management

Netflux is designed to be lightweight and fast, relying purely on React's built-in hooks:

- **Centralized State (`App.jsx`):** The primary data dictionary (fetched movie rows), search states, selected movie modal state, and UI themes are managed at the root and passed down cleanly via props.
- **Component Modularity:** UI elements are strictly compartmentalized (e.g., `Hero.jsx`, `MovieRow.jsx`, `MovieCard.jsx`). Each component handles its own scoped CSS.
- **Effect Synchronization:** `useEffect` is heavily utilized to sync component rendering with external data fetching, window keydown events (like pressing `Escape` to close the modal), and scroll listeners.

---

## 🚀 Installation & Local Setup

Follow these steps to run Netflux on your local development environment.

### Prerequisites
- **Node.js** (v16.0.0 or higher recommended)
- **NPM** or **Yarn**

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krishna-Srivastava-01/Netflix-Clone.git
   cd Netflix-Clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Obtain an OMDB API Key:**
   - Navigate to [OMDB API](http://www.omdbapi.com/apikey.aspx) and register for a free API key.

4. **Configure the Environment:**
   - Open `src/App.jsx`.
   - Locate the `API_KEY` constant near the top of the file.
   - Replace the placeholder string with your actual API key:
   ```javascript
   const API_KEY = "your_omdb_api_key_here";
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

6. **View the Application:**
   Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

---

## 📁 Directory Structure

```text
src/
├── components/
│   ├── Footer.jsx        # Standardized global footer with GitHub links
│   ├── Footer.css
│   ├── Hero.jsx          # Massive featured banner with gradients
│   ├── Hero.css
│   ├── MovieCard.jsx     # Highly interactive grid item
│   ├── MovieCard.css     # Handles complex hover & z-index scaling
│   ├── MovieModal.jsx    # Pop-up detailed metadata view
│   ├── MovieModal.css
│   ├── MovieRow.jsx      # Horizontal scrolling container for cards
│   ├── MovieRow.css      # Hides scrollbars, manages vertical padding
│   ├── Navbar.jsx        # Sticky top navigation with search & theme toggle
│   ├── Navbar.css
│   ├── SearchBar.jsx     # Modular search input
│   └── SearchBar.css
├── App.jsx               # Root application logic & API fetching
├── App.css               # Global application layout & theme transitions
├── index.css             # CSS reset, body styling, and CSS root variables
└── main.jsx              # React DOM entry point
```

---

## 🔮 Future Roadmap

While this project is a robust front-end clone, potential future expansions could include:

- **React Router Integration:** Moving the Search view and individual Movie Details into dedicated URL routes.
- **Backend Authentication:** Integrating Firebase or Supabase for user login, profile creation, and personalized "My List" saving.
- **Infinite Scrolling:** Implementing Intersection Observers to continuously load new movies as the user scrolls right on a `MovieRow` or down on the search page.
- **Video Playback Integration:** Connecting to YouTube's API to play trailers within the modal when the "Play" button is clicked.

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Developed with ❤️ as a demonstration of modern React and CSS capabilities.*