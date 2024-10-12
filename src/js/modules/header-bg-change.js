function headerTopChange () {
  let headerTop = document.querySelector('.header-top--gradient-bg')

  if (headerTop) {
    window.onscroll = function(){
      if(window.scrollY > 1){
          headerTop.classList.remove("header-top--gradient-bg");
      } else {
        headerTop.classList.add("header-top--gradient-bg");
      }
    }
  }
    
}

export default headerTopChange;