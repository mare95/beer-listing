import "../styles/beerItem.less";
import { Beer } from "../types/beer";
import { toggleModal } from "../components/modal";
import { getBeerItemColorClass } from "../utils/style";
import { BEER_ITEM_TEMPLATE } from "../templates/beerItem";

const createBeerItem = (beer: Beer) => {
  const colorClass = getBeerItemColorClass(beer.ibu);
  const beerItem = document.createElement("div");
  beerItem.classList.add("beer-item", colorClass);
  beerItem.addEventListener("click", () => {
    toggleModal(true, beer);
  });

  let template = BEER_ITEM_TEMPLATE.replace("BEER_TITLE", beer.name);
  template = template.replace("BEER_IMAGE", beer.image_url);
  template = template.replace("BEER_ABV", beer.abv.toString());
  template = template.replace("BEER_IBU", beer.ibu.toString());
  beerItem.innerHTML = template;

  return beerItem;
};

export default createBeerItem;
