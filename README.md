
# 🎮 GameMarket
 I did the project as part of the ReactJS, TypeScript learning at https://codewithmosh.com/ (I suggest him for all trying to learn React)
 I used the public APIs of RAWG.io (providing information about games)
An interactive, responsive, and modern React-based Web Application designed for browsing, searching, and purchasing digital video games. Built with a component-driven architecture, this application delivers a seamless shopping experience with smooth UI transitions and real-time interactive features.

---

## 🚀 Key Features

- **Dynamic Game Grid:** Displays interactive game cards with genre, platform icon sets, and critic performance badges.
- **Robust Filtering & Sorting:** Narrow down catalog items instantly by genre, platform compatibility, and release/popularity metrics.
- **Real-Time Search:** Instant search updates as you type, integrated seamlessly with catalog querying.
- **Skeleton Loading UI:** High-fidelity placeholder animations (`GameCardSkeleton` & `SideGenreSkeleton`) to elevate UX during API transitions.
- **Theme Customization:** Toggle between dark and light modes cleanly with a custom switch component.
- **Performance Optimized:** Dynamic image cropping integration ensures efficient asset delivery without dragging down bandwidth.

---

## 🛠️ Tech Stack

- **Framework:** React 18+ (Functional Components & Hooks)
- **Language:** TypeScript (Strict Typing)
- **Build Tool:** Vite
- **Data Fetching:** Axios / Fetch-based custom API service
- **Styling:** CSS3 (Tailwind / Custom Modules as imported in `index.css`)
---

## 📂 Project Structure

The project follows a highly modular, clean-architecture pattern separating core logic (hooks/services) from presentational layouts (components):

```text
game-sell-website/
├── public/
│   └── vite.svg                # Application favicon
└── src/
    ├── assets/                 # Local image and vector assets
    ├── components/             # Reusable UI components
    │   ├── ui/                 # Small atomic design UI parts
    │   │   ├── ColorModeSwitch.tsx  # Theme toggle component
    │   │   ├── CriticScore.tsx      # Highlighting game scores (Metascore)
    │   │   ├── Dropdown.tsx         # Custom selector wrapper
    │   │   ├── EmojiIcon.tsx        # Rating-based contextual feedback emojis
    │   │   ├── GameCard.tsx         # Compact display container for a single game
    │   │   ├── GameCardContainer.tsx# Layout wrapper for individual cards
    │   │   ├── GameCardSkeleton.tsx # Loader skeleton mockup for game cards
    │   │   ├── GameGrid.tsx         # Flexible layout display for game lists
    │   │   ├── HeadingTitle.tsx     # Dynamic page/section titles
    │   │   ├── InputBox.tsx         # Reusable text input
    │   │   ├── NavBar.tsx           # Global navigation and application header
    │   │   ├── NotFoundCard.tsx     # Empty state/No results component
    │   │   ├── PlatformIconList.tsx # Dynamic mapping of platform icons (PC, Xbox, PlayStation)
    │   │   ├── PlatformSelector.tsx # Dropdown element to filter by system platform
    │   │   ├── SearchingBox.tsx     # Search text container
    │   │   ├── SideGenreSkeleton.tsx# Loading placeholder for sidebar genres
    │   │   ├── SideGenres.tsx       # Interactive sidebar displaying categories
    │   │   └── Sortselector.tsx     # Sorting dropdown (Rating, Name, Release Date)
    ├── data/                   # Mock, static, or fallback local datasets
    │   ├── genre.ts            
    │   └── platforms.ts        
    ├── hooks/                  # Custom React Hooks (Separating State Logic)
    │   ├── useData.ts          # Generic data fetching logic wrapper
    │   ├── useGame.ts          # State manager hook for fetching game objects
    │   ├── useGenre.ts         # Handles fetching game genres
    │   ├── usePlatform.ts      # Handles fetching gaming platforms
    │   └── useSearchInput.ts   # Manages query search bindings
    ├── services/               # Core configuration and helper utilities
    │   ├── api-client.ts       # Centralized API requests configuration
    │   └── crop-image.ts       # Utility to scale and crop game screenshots on-the-fly
    ├── App.css                 # Global app-specific stylesheet
    ├── App.tsx                 # Core application controller
    ├── index.css               # Base Tailwind CSS / Global styling overrides
    └── main.tsx                # Client entry-point rendering root React tree
```

## ⚙️ Installation & Setup

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone [https://github.com/Mehkhosravi/game_market.git](https://github.com/Mehkhosravi/game_market.git)
cd game_market/game-sell-website

```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
# or if using yarn:
yarn install

```

### 3. Run the Development Server

Start the local server to preview the application:

```bash
npm run dev
# or if using yarn:
yarn dev

```

Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

### 4. Build for Production

To generate an optimized, minified build for deployment:

```bash
npm run build

```

---

## 💡 Key Implementations

### State Management

The project utilizes React state hooks (`useState`, `useEffect`, or `useContext`) to elegantly synchronize the main catalog, active search filters, and the global state of the shopping cart across different UI components without prop drilling.

### Responsive Performance

Images are optimized for performance, and lazy loading is incorporated where applicable to ensure rapid initial paint times and smooth scrolling experiences.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

