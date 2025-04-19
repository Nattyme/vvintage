import categories from './../../data/categories.json';

const addCatsCards = () => {
  const cats = JSON.parse(JSON.stringify(categories));
  console.log(cats);

  const catsCardsTemplate = `
      <a href="shop-single.html" class="card-small">
        <div class="card-small__img">
          
          <svg class="icon icon--arrow-right">
            <use href="./img/svgsprite/sprite.symbol.svg#arrow-right"></use>
          </svg>
        
          <img src="./../../img/cats/01.jpg" srcset="./../../img/cats/01@2x.jpg" alt="">
        </div>
        <!-- price -->
        <div class="card-small__desc">
          <div class="card-small__title">
            <h4 class="h4">ДЛЯ ЖЕНЩИН</h4>
          </div>
        </div>
        <!--// price -->
      </a>
  `;
  
}

export default addCatsCards;