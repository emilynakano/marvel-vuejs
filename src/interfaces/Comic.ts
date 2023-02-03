interface IComic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export type { IComic };
