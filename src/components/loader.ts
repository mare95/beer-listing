import "../styles/loader.less";

const createLoader = () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");

  return loader;
};

export default createLoader;
