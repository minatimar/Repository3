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
      data-js="card-Img"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title" data-js="card-title"></h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description" data-js="card-status"></dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description" data-js="card-type"></dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description" data-js="card-occurrences"></dd>
    </dl>
  </div>`;

  const cardImg = card.querySelector('[data-js="card-Img"]');
  cardImg.src = character.image;
  const cardTitle = card.querySelector('[data-js="card-title"]');
  cardTitle.textContent = character.name;
  const cardStatus = card.querySelector('[data-js="card-status"]');
  cardStatus.textContent = character.status;
  const cardType = card.querySelector('[data-js="card-type"]');
  cardType.textContent = character.type;
  const cardOccurrences = card.querySelector('[data-js="card-occurrences"]');
  cardOccurrences.textContent = character;
  return card;
}
