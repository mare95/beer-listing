import "./styles/main.less";
import "./styles/modal.less";
import { fetchBeerList } from "./api/fetchBeerList";
import createLoader from "./components/loader";
import { Beer } from "./types/beer";
import createBeerItem from "./components/beerItem";
import createModal from "./components/modal";

const init = () => {
  const root = document.getElementById("root");

  if (!root) {
    return null;
  }

  const loader = createLoader();
  root.appendChild(loader);

  // Fetch beer list
  fetchBeerList()
    .then((data: Beer[]) => {
      root.removeChild(loader);

      // Append beer list
      data.forEach((beer: Beer) => {
        root.appendChild(createBeerItem(beer));
      });

      // after everything is loaded, append modal
      const modal = createModal();
      root.appendChild(modal);
    })
    .catch(() => {
      // show generic error message
      const error = document.getElementById("error");
      if (!error) {
        return null;
      }
      error.style.display = "block";
    });
};

init();
