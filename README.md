# Namaste YouTube

A YouTube clone built with React 19, Redux Toolkit, and Tailwind CSS. The app fetches real trending videos from the YouTube Data API v3, supports debounced search suggestions with client-side caching, and includes a video watch page with embedded playback, a simulated live chat panel, and a recursive nested comments section.

## Features

- **Trending Video Feed** — Fetches the top 41 most popular videos in India via the YouTube Data API v3 and renders them in a responsive card grid with formatted view counts and relative timestamps.
- **Category Filter Bar** — Horizontally scrollable pill-button filter bar (All, Live, Music, Gaming, News, Sports, Learning, and more) with dynamic left/right scroll arrow visibility.
- **Collapsible Sidebar** — Full-height sidebar with navigation sections (Home, Shorts, Subscriptions, You, Explore, More from YouTube). Toggled by the hamburger menu; state is managed globally via Redux.
- **Debounced Search with Caching** — Search suggestions are fetched from the Google Suggest API with a 200 ms debounce. Results are cached in the Redux store so repeated queries skip the network request.
- **Video Watch Page** — Clicking any video navigates to `/watch?v=<videoId>`, which embeds the video via an `<iframe>` alongside a simulated live chat panel.
- **Live Chat Panel** — Auto-generates a new random message every 2 seconds using `setInterval`. Messages are prepended to the top (newest first) via Redux. The message list is capped using `LIVE_CHAT_MESSAGES_SPLICE` to prevent unbounded memory growth. Users can also type and send their own messages which appear as "You".
- **Recursive Nested Comments** — Comment thread component renders arbitrarily deep reply trees using a self-referencing `SingleComment` component.
- **404 Fallback** — A `NotFound` component is shown for any unmatched route.

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI Framework | React 19 |
| Styling | Tailwind CSS 3 |
| State Management | Redux Toolkit 2 + React-Redux 9 |
| Routing | React Router DOM 7 |
| Build Tool | Create React App (react-scripts 5) |
| Video Data | YouTube Data API v3 |
| Search Suggestions | Google Suggest API |

## Project Structure

```
src/
├── App.js                  # Root layout, router definition, Redux Provider
├── component/
│   ├── Header.jsx          # Sticky header: logo, search bar, user avatar
│   ├── SiderBar.jsx        # Collapsible sidebar navigation
│   ├── BodyMenuBar.jsx     # Scrollable category filter bar
│   ├── Body.jsx            # Home page shell
│   ├── BodyVideosCards.jsx # Fetches videos from YouTube API, renders grid
│   ├── VideoCards.jsx      # Individual video card (thumbnail, title, meta)
│   ├── Watch.jsx           # Video watch page (iframe + live chat + comments)
│   ├── LiveChat.jsx        # Live chat container: auto-messages + user input + Redux dispatch
│   ├── ChatMessages.jsx    # Individual chat message row (avatar, name, message)
│   ├── Comment.jsx         # Recursive nested comment tree
│   └── NotFound.jsx        # 404 error page
└── utils/
    ├── store.jsx           # Redux store (app + search + chat reducers)
    ├── appSlice.jsx        # Sidebar open/close toggle state
    ├── searchSlice.jsx     # Search suggestion cache (query → results map)
    ├── chatSlice.jsx       # Live chat messages state, makeid() and generateNames() helpers
    └── constant.jsx        # API URLs, icon asset URLs, and LIVE_CHAT_MESSAGES_SPLICE cap
```

## Architecture Overview

**Redux Store**

```
store
├── app.isMenuOpen     → boolean, controls sidebar visibility
├── search             → { [query]: suggestions[] }, search result cache
└── chat.messages      → message[], capped list of { name, message } objects
```

**Routing**

```
/               → Home page (trending video grid)
/watch?v=<id>   → Video watch page
*               → NotFound (404)
```

**Search Flow**

1. User types in the search bar → 200 ms debounce fires.
2. If the query exists in the Redux cache → render cached suggestions immediately.
3. Otherwise → fetch from Google Suggest API → store result in Redux cache → render.

## Getting Started

### Prerequisites

- Node.js 18+
- A YouTube Data API v3 key ([get one here](https://console.cloud.google.com/))

### Installation

```bash
git clone https://github.com/ankitsaini001/namaste-youtube.git
cd namaste-youtube
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_YT_API_KEY=your_youtube_api_key_here
```

> The key is injected into the YouTube API URL at build time via `process.env.REACT_APP_YT_API_KEY`.

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The optimised build is output to the `build/` folder.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server on port 3000 |
| `npm run build` | Create optimised production build |
| `npm test` | Run tests in interactive watch mode |
| `npm run eject` | Eject from Create React App (irreversible) |
