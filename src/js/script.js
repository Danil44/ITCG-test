import ipsumTpl from "./templates/recipe-section/ipsum.hbs";
import loremTpl from "./templates/recipe-section/lorem.hbs";
// import variables from '../sass/helpers/variables.scss'
const recipeContent = document.querySelector(".recipe-content__inner");
const recipeSwitcher = document.querySelector(".recipe-content__switcher");
const ipsumMarkup = ipsumTpl();
const loremMarkup = loremTpl();

recipeSwitcher.addEventListener("click", handleSwitchContent);

const loadContent = () => {
  recipeContent.innerHTML = loremMarkup;
};

loadContent();

function handleSwitchContent(evt) {
  evt.preventDefault();
  const target = evt.target;
  const closest = target.closest("li");

  if (target.nodeName !== "LI" && target.nodeName !== "SPAN") return;

  if (
    target.dataset.content === "lorem" ||
    closest.dataset.content === "lorem"
  ) {
    recipeContent.innerHTML = loremMarkup;
  }

  if (
    target.dataset.content === "ipsum" ||
    closest.dataset.content === "ipsum"
  ) {
    recipeContent.innerHTML = ipsumMarkup;
  }
  setActiveLink(target.closest("li"));
}
function setActiveLink(nextLink) {
    const currentLink = document.querySelector(".switcher__item--selected");

    if (currentLink) {
      currentLink.classList.remove("switcher__item--selected");
    }
    nextLink.classList.add("switcher__item--selected");
}
