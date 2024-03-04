export default interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  films: Film[];
  species: Species[];
  starships: Starship[];
}

export interface Film {
  title: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface Species {
  name: string;
  classification: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
}
