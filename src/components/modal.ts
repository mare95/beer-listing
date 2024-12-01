import "../styles/modal.less";
import "../styles/dropdown.less";
import { Beer } from "../types/beer";
import { DROPDOWN_TEMPLATE } from "../templates/dropdown";
import { MODAL_CONTENT_TEMPLATE } from "../templates/modal";

const closeIcon = require("../assets/close.svg");

const updateModalContent = (beer?: Beer) => {
  const modal = document.getElementById("modal");
  const modalContent = document.createElement("div");

  // don't close modal when clicking on modal content
  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalContent.id = "modal-content";

  // if beer is present, update modal content
  if (beer) {
    let template = MODAL_CONTENT_TEMPLATE.replace("BEER_IMAGE", beer.image_url);
    template = template.replace("BEER_DESCRIPTION", beer.description);
    template = template.replace("BEER_NAME", beer.name);
    template = template.replace("BEER_ABV", beer.abv.toString());
    template = template.replace("BEER_IBU", beer.ibu.toString());
    template = template.replace("DROPDOWN", DROPDOWN_TEMPLATE);
    modalContent.innerHTML = template;
    modal?.appendChild(modalContent);
  } else {
    const existingContent = document.getElementById("modal-content");
    if (existingContent) modal?.removeChild(existingContent);
  }
};

export const toggleModal = (isOpen: boolean, beer?: Beer) => {
  const modal = document.getElementById("modal");

  updateModalContent(beer);

  if (modal) {
    if (isOpen && beer) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
};

const createModal = () => {
  const modal = document.createElement("div");
  modal.id = "modal";

  // close modal when clicking outside of modal content
  modal.addEventListener("click", () => toggleModal(false));

  const modalClose = document.createElement("div");
  modalClose.classList.add("close");
  modalClose.innerHTML = closeIcon;

  // close modal when clicking on close icon
  modalClose.addEventListener("click", () => toggleModal(false));

  modal.appendChild(modalClose);
  return modal;
};

export default createModal;
