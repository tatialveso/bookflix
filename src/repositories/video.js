import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed-videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  })
    .then(async (serverAnswer) => {
      if (serverAnswer.ok) {
        const answer = await serverAnswer.json();
        return answer;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  create,
};
