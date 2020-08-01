import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
