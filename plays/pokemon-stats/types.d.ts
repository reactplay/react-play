export interface Species {
  name: string;
}

export interface Sprites {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
}

export interface Type {
  type: Type2;
}

export interface Type2 {
  name: string;
}

export interface Root {
  name: string;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Props {
  pokemon: Root;
  backToSearch: () => void;
}

export interface PlayRoot {
  component: any;
  cover: any;
  description: string;
  featured: any;
  dev_mode: boolean;
  github: string;
  language: string;
  play_like: PlayLike[];
  name: string;
  slug: string;
  user: User;
  created_at: string;
  path: string;
  blog: any;
  id: string;
  level: Level;
  video: any;
  play_tags: PlayTag[];
  title_name: string;
}

export interface PlayLike {
  liked: boolean;
  play_id: string;
  user_id: string;
}

export interface User {
  id: string;
  displayName: string;
  avatarUrl: string;
}

export interface Level {
  name: string;
}

export interface PlayTag {
  tag: Tag;
}

export interface Tag {
  name: string;
}
