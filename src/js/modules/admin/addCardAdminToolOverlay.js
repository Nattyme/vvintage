const addAdminCardToolOverlay = () => {
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

const closeAllModals = (outerContainer) => {
  const openModals = outerContainer.querySelectorAll('.subTools.open');
  openModals.forEach(openModal => openModal.classList.remove('open'));
}

const toggleModal = (outerContainer, currentModalWrapper) => {
  closeAllModals(outerContainer);
  const currentModal = currentModalWrapper.querySelector('.subTools');
  currentModal.classList.toggle('open');
}


const handleToolsOverlay = (outerContainer) => {
  // Находим все контейнеры tools
  outerContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const btn = e.target.closest('[data-btn]');
    if (!btn) return;
    const currentToolWrapper = btn.closest('li');

    switch (btn.dataset.btn) {
      case 'delete' :
        currentToolWrapper.remove();
        break;
      case 'menu' : 
        toggleModal(outerContainer, currentToolWrapper);
        break;
      default: return;
    }
    
  });  

}

export {addAdminCardToolOverlay, handleToolsOverlay, closeAllModals};