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
}
