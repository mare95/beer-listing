const SUBMENU = `
  <ul class="lvl2 menu">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
  </ul>`;

export const DROPDOWN_TEMPLATE = `
  <button class='menu-button'>
    Select
    <ul class="menu">
      <li>
        <a href="#">Glass</a>
        ${SUBMENU}
      </li>
      <li>
        <a href="#">Can</a>
        ${SUBMENU}
      </li>
      <li>
        <a href="#">Box</a>
        ${SUBMENU}
      </li>
    </ul>
  </button>
`;
