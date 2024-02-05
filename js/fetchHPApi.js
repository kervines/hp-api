import { createChar } from './createChar.js';

export default function initFetchApi() {
  const urlAPI = 'https://hp-api.onrender.com/api/characters/';
  const container = document.getElementById('container');

  container.innerHTML = `
  <div class="loading"></div>
  `;

  const fetchAPI = async (url) => {
    let idChar = 0;
    const hpAPI = fetch(url);
    const response = await (await hpAPI).json();

    clearChar();

    for (idChar; idChar < response.length; idChar++) {
      const {
        name,
        house,
        image,
        species,
        patronus,
        gender,
        dateOfBirth,
        wand: { wood, core },
      } = response[idChar];

      createChar(
        image,
        name,
        house,
        species,
        gender,
        dateOfBirth,
        patronus,
        wood,
        core
      );
    }
  };

  fetchAPI(urlAPI);

  function clearChar() {
    const container = document.getElementById('container');
    container.innerHTML = '';
  }

  async function selectHouse() {
    const form = document.querySelector('form');
    form.addEventListener('change', (e) => {
      const houseName = e.target.value;
      const urlAPIHouse = `https://hp-api.onrender.com/api/characters/house/${houseName}`;
      if (houseName === '') {
        return fetchAPI(urlAPI);
      }
      return fetchAPI(urlAPIHouse);
    });
  }
  selectHouse();
}
