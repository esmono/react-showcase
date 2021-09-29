import http from './api';

const getAllCharacters = async (page: number, name: string) => http.get(`/character?page=${page + 1}&name=${name}`);

const getCharacter = (id: number) => http.get(`/character/${id}`);

const findCharacters = (name: string) => http.get(`/character?name=${name}`);

const CharactersService = {
  getAllCharacters,
  getCharacter,
  findCharacters,
};

export default CharactersService;
