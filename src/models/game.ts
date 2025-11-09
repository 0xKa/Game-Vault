import type { Genre, Platform } from "@/models";
import type { Publisher } from "./publisher";
import type { Tag } from "./tag";

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
