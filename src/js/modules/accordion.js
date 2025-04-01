const addAccordion = (type, selector) => {
  // e.preventDefault();
  const accordionWrapper = document.querySelector(selector);
  const accordionBtns = accordionWrapper.querySelectorAll('.accordion__btn');
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionContents = document.querySelectorAll('.accordion__content');

  const findContentAndItem = (btn) => {
    const currentItem = btn.closest('.accordion__item');
    const currentContent = currentItem.querySelector('.accordion__content');
    return {currentItem, currentContent}
  }

  const showContent = (e, btn) => {
    e.preventDefault();
    const {currentItem, currentContent} = findContentAndItem(btn);
    
    if (currentItem.classList.contains('active')) {
      currentItem.classList.remove('active');
      currentContent.style.maxHeight = 0;
    } else {
      currentItem.classList.add('active');
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    }
   

  }

  const showOnlyContent = (e, btn) => {
    e.preventDefault();
    const {currentItem, currentContent} = findContentAndItem(btn);

    if (currentItem.classList.contains('active')) {
      currentItem.classList.remove('active');
      currentContent.style.maxHeight = 0;
    }

    else {
      accordionItems.forEach(item => item.classList.remove('active'));
      accordionContents.forEach(content => content.style.maxHeight = 0);

      currentItem.classList.add('active');
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    }    

    console.log(currentContent);
  };

  const startAccordionByType = (e, btn) => {
    switch (type) {
      case 'only' :
        showOnlyContent(e, btn);
        break;

      case 'many' :
        showContent(e, btn);
        break;
    }

  }


  // Слушаем клик по кнопкам 
  accordionBtns.forEach(btn => btn.addEventListener ('click',  (e) => startAccordionByType(e, btn)));
}

export default addAccordion;
