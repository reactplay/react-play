export interface PlayRoot {
  component: React.ReactNode;
  cover: string;
  description: string;
  featured: string;
  dev_mode: boolean;
  github: string;
  language: string;
  play_like: PlayLike[];
  name: string;
  slug: string;
  user: User;
  created_at: string;
  path: string;
  blog: string;
  id: string;
  level: Level;
  video: string;
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
