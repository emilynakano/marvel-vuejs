import type { ICharacter } from "@/interfaces/Character";
import type { IComic } from "@/interfaces/Comic";
import configRouter from "./marvelAPI/configRouter";
import instance from "./marvelAPI/instance";

const config = configRouter();

function formatCharacter(param: ICharacter[]) {
  return param.filter(
    (c: ICharacter) =>
      !c.thumbnail.path.includes("image_not_available") &&
      !c.thumbnail.extension.includes("gif")
  );
}

function formatComic(param: IComic[]) {
  return param.filter(
    (c: IComic) =>
      !c.thumbnail.path.includes("image_not_available") &&
      !c.thumbnail.extension.includes("gif")
  );
}

async function getAllCharacters(offset: number) {
  const { data } = await instance.get(
    `characters?limit=25&offset=${offset}&${config}`
  );
  return formatCharacter(data.data.results);
}

async function getCharacterById(id: number) {
  const { data } = await instance.get(`characters/${id}?${config}`);
  return data.data.results[0];
}

async function getCharacterComics(id: number) {
  const { data } = await instance.get(`characters/${id}/comics?${config}`);
  return formatComic(data.data.results);
}

async function getCharactersStartsWith(search: string) {
  const { data } = await instance.get(
    `characters?nameStartsWith=${search}&${config}`
  );
  return formatCharacter(data.data.results);
}

export {
  getAllCharacters,
  getCharacterById,
  getCharacterComics,
  getCharactersStartsWith,
};
