import type { Genre, Platform } from "@/types";
import { create } from "zustand";

interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOption?: string;
  searchQuery?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre | undefined) => void;
  setPlatform: (platform: Platform | undefined) => void;
  setSortOption: (sortOption: string) => void;
  setSearchText: (searchQuery: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenre: (genre: Genre | undefined) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genre },
    })),

  setPlatform: (platform: Platform | undefined) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platform },
    })),

  setSortOption: (sortOption: string) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOption },
    })),

  setSearchText: (searchQuery: string) => set({ gameQuery: { searchQuery } }), // resets other fields
}));

export default useGameQueryStore;
