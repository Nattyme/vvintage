const addSubNavCats = () => {
  const subNavContainer = document.querySelector('#sub-sub-nav');
  const subNavList = document.querySelector('.sub-nav__list');
  console.log(subNavList);
  const womenCats = {
    bags : ['Рюкзак', 'Клатч', 'Портмоне'],
    glasses : ['Авиаторы', 'Квадратые', 'Круглые'],
    parfume : ['Парфюмерная вода', 'Духи', 'Пробники', 'Наборы ароматов'],
    cosmetic : ['Кремы', 'Палетки теней', 'Тушь', 'Помада'],
    watches : ['На ремешке', 'Металлические', 'С драгоценными вставками']
  };
  const addCategories = (e) => {
    if (e.target.children[1] && e.target.children[1].hasAttribute('data-cat')) {
      const currentCat = e.target.children[1].getAttribute('data-cat');

      if (womenCats[currentCat]) {
          subNavContainer.innerHTML = womenCats[currentCat].map(cat => 
              `
            <li class="sub-nav__item">
              <a href="#">${cat}</a>
            </li>
            `).join("");
      }

      if (currentCat === 'all') {
        subNavContainer.innerHTML= '';
      }
   
      
    }
  
  }

  subNavList.addEventListener( 'mouseover', addCategories);
  // console.log(womenCats);
  // subNavContainer.innerHTML = womenCats.map (cat => 
  //   `
  //  <li class="sub-nav__item">
  //   <a href="#">${cat}</a>
  //  </li>
  // `).join("");
};

export default addSubNavCats;