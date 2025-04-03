import addAccordion from "./accordion";


const addControlPanel = () => {
  // Данные разделов панели управления 
  const data = [
    {
      'cat' : 'Админ панель',
      'icon' : 'inbox',
      'subCat' : []
    },
    {
      'cat' : 'Магазин',
      'icon' : 'shop',
      'subCat' : ['Добавить товар', 'Все товары', 'Все бренды', 'Все категории', 'Заказы']
    },
    {
      'cat' : 'Сообщения',
      'icon' : 'mail',
      'subCat' : []
    },
    {
      'cat' : 'Страницы',
      'icon' : 'file',
      'subCat' : ['Главная', 'Контакты']
    },
    {
      'cat' : 'Настройки',
      'icon' : 'settings',
      'subCat' : []
    },
    {
      'cat' : 'Мой профиль',
      'icon' : 'user',
      'subCat' : []
    },
    {
      'cat' : 'Выход',
      'icon' : 'log-out',
      'subCat' : []
    }
  ];

  const panel = document.querySelector('.control-panel__list');
  const panelItemTemplate = (cat, icon) => {
    return `
            <li class="control-panel__list-item">
              <button class="control-panel__list-button" title="Перейти в раздел '${cat}'">
                <div class="control-panel__list-img-wrapper">
                  <img class="control-panel__list-img" src="./../../img/svgsprite/stack/svg/sprite.stack.svg#${icon}" alt="Админ панель" />
                </div>
                ${cat}
              </button>
            </li>
          `;
  }

  const panelTabTemplate = () => {

  }

  // Обходим массив с данными и создаем HTML разметку
  const controlPanelList = data.map(item => panelItemTemplate(item.cat, item.icon)).join('');
  if(!panel) return;
  panel.insertAdjacentHTML('beforeend', controlPanelList);

  // Запускаем функцию аккордеона
  addAccordion('many', '#control-panel-tab');
 
}

export default addControlPanel;

