import addAccordion from "./accordion";


const addControlPanel = () => {
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
    
  ];

  addAccordion('many', '#control-panel-tab');
  console.log('hey from control panel');
  console.log(window.location);
  
}

export default addControlPanel;

