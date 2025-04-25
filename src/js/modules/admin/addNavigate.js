const addNavigate = (clickedItemData) => {
  console.log('hello from navigate');
  console.log(clickedItemData);
  history.pushState({page: clickedItemData}, `Панель администратора - ${clickedItemData}`, clickedItemData)
}

export default addNavigate;