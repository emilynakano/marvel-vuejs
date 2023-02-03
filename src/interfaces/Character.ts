interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

export type { ICharacter };
