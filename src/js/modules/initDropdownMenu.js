// container, triggerAttr, menuSelector, itemAttr, actions {}
const initDropdown = (container, {triggerAttr='data-btn', menuSelector='.subTools'} = {}) => {
  const root = typeof container === 'string' ? document.querySelector(container) : container;

  if (root._dropdownInited) return;
  root._dropdownInited = true;

  // Закрыть все окна
  const closeAll = () => {
    const allOpenMenu = root.querySelectorAll(`${menuSelector}.open`);
    allOpenMenu.forEach(menu => menu.classList.remove('open'));
  }

  // Ф-ция закрывает все меню по клику на документе
  const handleClickOutContainer = (e) => {
    if(!e.target.closest(menuSelector) && !e.target.closest(`[${triggerAttr}]`)) closeAll();
  }

  // Слушаем события по документу
  document.addEventListener('click', (e) => handleClickOutContainer(e));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

    // Слушаем клик на контейнере карточек
    root.addEventListener('click', (e) => {
      console.log('clicked button');
      
      const btn = e.target.closest(`[${triggerAttr}]`);
      if (!btn) return;
      e.preventDefault();
  console.log(btn);
  
      // Находим меню, по кнопке которого был клик
      const menu = btn.querySelector(menuSelector) ? btn.querySelector(menuSelector) : root.querySelector(menuSelector);
      if(!menu) return;

      closeAll();
      // Открыть / закрыть меню
      menu.classList.toggle('open');
  
      // ОБрабатываем клик по пунку меню
      // const menuItem = e.target.closest(`[${itemAttr}]`);
    });

  return {
    closeAll
  }
}

export default initDropdown;
