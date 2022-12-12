import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const returnValue = createCharacterCard({ name: "test" });
console.log(returnValue);
cardContainer.append(returnValue);

async function fetchData() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (response.ok) {
      const data = await response.json();
      const firstCharacter = createCharacterCard(data.results[2]);
      cardContainer.append(firstCharacter);
      console.log(data);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("error.message");
  }
}

fetchData();
