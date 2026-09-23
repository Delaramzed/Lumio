# Lumio 🎬

A cinematic movie and series streaming app built with React. Persian-first UI with dark theme.

## Features

- 🏠 Home with hero banner, Continue Watching, and carousels
- 🎥 Movies & Series browsing with genre filters
- 🔍 Search with type, rating, and year filters
- ▶️ Watch page with episode list and autoplay toggle
- 🎞️ Movie/Series detail pages with cast and trailer tabs
- 👤 Multi-profile support (including Kids profile)
- ❤️ Watchlist / My List with sort and filter
- 🔐 Auth (Login / Register) with Google & Apple SSO
- 📱 Fully responsive — desktop, tablet, mobile

## Stack

- [Vite](https://vitejs.dev/) + React
- React Router v6 (nested routes with `Outlet` for sidebar layout)
- Axios (TMDB API)
- Lucide React (icons)
- Supabase (Auth + Watchlist persistence)
- TMDB API (movie/series data)

## Project Architecture

This project follows a **Feature-lite Layered Architecture**, suitable for
small-to-medium scale React applications.

### Folder Structure
