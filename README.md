# Game Vault

A RAWG.io-like game browser built with React + TypeScript, Chakra UI, and TanStack Query. It supports filtering by platform/genre, sorting, paginated infinite scrolling, and detailed game pages with trailers and screenshots.

Live demo: <https://game-vault.vercel.app/>

![Game Vault GIF](./public/game-vault.gif)

## Features

- Browse games with infinite scrolling
- Filter by genre and platform
- Sort by name, relevance, popularity, rating, or release date
- Submit-based search (no instant search) with Ctrl+K focus
- Detailed game page with description, attributes, trailers, and screenshots
- Typed models ([`Game`](src/models/game.ts), [`Genre`](src/models/genre.ts), [`Platform`](src/models/platform.ts), etc.)
- Global state via Zustand
- Data fetching and caching with TanStack React Query

## Tech Stack

- React 19, TypeScript, Vite
- Chakra UI v3
- TanStack React Query v5
- React Router v7
- Zustand v5
- Axios
- ms (TTL helpers)

## Getting Started

- Prerequisites

  - Node 18+ (recommended LTS)
  - RAWG API key: <https://rawg.io/apidocs>

- Install

  ```powershell
  npm install
  ```

- Environment

  Create a .env file in the project root:

  ```env
  VITE_RAWG_API_KEY=your_rawg_api_key_here
  ```

- Run

  ```powershell
  npm run dev
  ```

## Architecture Notes

- Routing: [src/routes.tsx](src/routes.tsx) mounts `Layout` with nested routes for Home and Game Detail.
- Data fetching/caching:
  - Axios instance with API key params: [`apiClient`](src/services/apiClient.ts)
  - Generic REST wrapper: [`HttpClient<T>`](src/services/httpClient.ts)
  - React Query keys: [`queryKeys`](src/hooks/queryKeys.ts)
- State: [`gamesStore`](src/stores/gamesStore.ts) holds a single `gameQuery` object:
  - genre, platform, sortOption, searchQuery
  - setSearchText currently replaces the gameQuery to commit a fresh search string on submit.
- Models: Typed interfaces in [`src/models`](src/models) and re-exported via the barrel: [`index.ts`](src/models/index.ts). Import with:

  ```ts
  import type { Game, Genre, Platform } from "@/models";
  ```

- UI:
  - Theming provider: [`Provider`](src/components/ui/provider.tsx)
  - Color mode API: [`color-mode.tsx`](src/components/ui/color-mode.tsx)
  - Keyboard shortcut: Ctrl+K focuses the search input ([`SearchInput`](src/components/navBar/SearchInput.tsx))
