import configRouter from "./marvelAPI/configRouter";
import instance from "./marvelAPI/instance";

const config = configRouter();

async function getAllCharacters(offset: number) {
  const { data } = await instance.get(
    `characters?limit=25&offset=${offset}&${config}`
  );
  return data.data.results;
}

async function getCharacterById(id: number) {
  const { data } = await instance.get(`characters/${id}?${config}`);
  return data.data.results[0];
}

async function getCharacterComics(id: number) {
  const { data } = await instance.get(`characters/${id}/comics?${config}`);
  return data.data.results;
}

export { getAllCharacters, getCharacterById, getCharacterComics };
