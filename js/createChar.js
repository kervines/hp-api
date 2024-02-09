const container = document.querySelector('.card-container');

function createCard(container, hs) {
  const card = document.createElement('div');
  if (hs) {
    const classHouse = hs.toLowerCase();
    card.classList.add(classHouse);
  }
  card.classList.add('card');
  container.appendChild(card);
  return card;
}

export function createChar(
  image,
  name,
  house,
  specie,
  gender,
  birth,
  patron,
  wood,
  core
) {
  const card = createCard(container, house);
  card.innerHTML = `<div class="image-container">
  <img class="perfil" src="${
    image ||
    'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
  }" alt="">
</div>
<div class="info-container">
  <h1 class="name">${name}</h1>
  <h2 class="house">${house}</h2>
  <p>Specie: <span class="specie">${specie}</span></p>
  <p>Gender: <span class="gender">${gender}</span></p>
  <p>Date of Birth: <span class="birth">${birth || 'N/A'}</span></p>
  <p>Patron: <span class="patron">${patron || 'N/A'}</span></p>
  <p>Wand: <span class="wand">${wood || 'N/A'} ${core}</span></p>
</div>`;
}
