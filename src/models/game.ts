import type { Genre, Platform, Publisher, Tag } from "@/models";

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  publishers: Publisher[];
  genres: Genre[];
  tags: Tag[];
}
