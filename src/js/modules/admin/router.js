// router.js
import addSectionCatalogTemplate from './catalog/addCatalogTemplate.js'
import  addSidebarControlPanel from './addSidebarControlPanel';
import addAdminCatalog from './addAdminCatalog.js';
import addNavigate from './addNavigate.js';


const router = () => {
  const currentPath = window.location.pathname;
  const currentSearch = window.location.search;
  const wrapper = document.querySelector('#dashboard__content');

  const addPage = (getSectionTemplate, wrapper, getItemTemplate, itemSelector) => {
    const tmpl = getSectionTemplate();
    if (!wrapper) return;
    if(tmpl) wrapper.innerHTML = '';
 
    if(wrapper) wrapper.insertAdjacentHTML('beforeend', getSectionTemplate());
    getItemTemplate(itemSelector);
  }

  if (currentPath === '/page-admin.html') addSidebarControlPanel();
  switch (currentSearch) {
    case '?catalog' :
      addPage(addSectionCatalogTemplate, wrapper, addAdminCatalog, '#catalog-list');
      break;
    
    
  }


  // <!-- @@include('./_admin-stats.html') -->
  // <!-- @@include('./_admin-catalog.html') -->
  // @@include('./_admin-shop.html')
  

}

export  default router;