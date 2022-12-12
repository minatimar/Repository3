const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard(character) {
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `
  <div class="card__image-container">
    <img
      class="card__image"
      src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title" data-js="card-title"></h2>
    <dl class="card__info">
      <dt class="card__info-title"></dt>
      <dd class="card__info-description"></dd>
      <dt class="card__info-title"></dt>
      <dd class="card__info-description"></dd>
      <dt class="card__info-title"></dt>
      <dd class="card__info-description"></dd>
    </dl>
  </div>`;
  const cardTitle = card.querySelector('[data-js="card-title"]');
  cardTitle.textContent = character.name;
  return card;
}
