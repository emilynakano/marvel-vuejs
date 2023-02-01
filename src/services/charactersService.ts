import configRouter from "./marvelAPI/configRouter";
import instance from "./marvelAPI/instance";

const config = configRouter();

async function getAllCharacters(offset: number) {
  const { data } = await instance.get(
    `characters?limit=25&offset=${offset}&${config}`
  );
  return data.data.results;
}

export { getAllCharacters };
