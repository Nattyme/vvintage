const addAdminCardToolOverlay = () => {
  const getToolOverlayTemplate = () => {
    return `
            <div class="tooltip">
                <div class="tooltip__row">
                  <a href="#" class="button-delete" data-btn="delete">
                    <svg class="icon icon--close">
                      <use href="./img/svgsprite/sprite.symbol.svg#close"></use>
                    </svg>
                  </a>
                  <button class="button-subTools" data-btn="menu">
                      <svg class="icon icon--arrow-menu">
                        <use href="./img/svgsprite/sprite.symbol.svg#menu"></use>
                      </svg>
                      <ul class="subTools">
                        <li class="subToolsItem">
                          <a href="#!">
                            <svg class="icon icon--arrow-right">
                              <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
                            </svg>
                            <span class="subToolsItem__text">Изменить</span>
                          </a>
                        </li>
                      </ul>
                  </button>
                </div>
            </div>
    `;
  }

  

  return getToolOverlayTemplate();

  
}

export default addAdminCardToolOverlay;