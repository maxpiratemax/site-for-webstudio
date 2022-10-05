const header = document.querySelector("#header");
const intro = document.querySelector("#intro");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let works = document.querySelector("#works");
let blog = document.querySelector("#blog");
let footer = document.querySelector("#footer");
let scrollOffset = window.scrollY;
const navBar = document.querySelectorAll('#nav a')
let weDo1 = document.querySelector("#wedo_1");
let weDo2 = document.querySelector("#wedo_2");
let weDo3 = document.querySelector("#wedo_3");
let navToggle = document.querySelector("#nav_toggle")

/* Fixed Header and Menu Lightning */
window.addEventListener("scroll", function () {
  scrollOffset = this.scrollY;
  checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
  let aboutH = about.getBoundingClientRect().top + scrollOffset
  let servicesH = services.getBoundingClientRect().top + scrollOffset
  let worksH = works.getBoundingClientRect().top + scrollOffset
  let blogH = blog.getBoundingClientRect().top + scrollOffset
  let footerH = footer.getBoundingClientRect().top + scrollOffset
  let aboutBlock = navBar[0]
  let servicesBlock = navBar[1]
  let worksBlock = navBar[2]
  let blogBlock = navBar[3]
  let footerBlock = navBar[4]

  function addClassToBlock(blockHeight, blockNav, block, addClass = 'active', startOffset = 20, endOffset = 100) {
    if (scrollOffset >= blockHeight - startOffset && scrollOffset <= blockHeight + block.clientHeight - endOffset) {
      blockNav.classList.add(addClass);
      header.classList.add("fixed");
    } else {
      blockNav.classList.remove(addClass);
    }
  }

  /* Disable Lightning and Fixed Menu*/
  if (scrollOffset < aboutH) {
    removeActiveClass()
    header.classList.remove("fixed");
  }

  /* Lightning About */
  addClassToBlock(aboutH, aboutBlock, about)

  /* Lightning Services */
  addClassToBlock(servicesH, servicesBlock, services)

  /* Lightning Works */
  addClassToBlock(worksH, worksBlock, works)

  /* Lightning Blog */
  addClassToBlock(blogH, blogBlock, blog, 'active', 20, 200)

  /* Lightning Contacts */
  addClassToBlock(footerH, footerBlock, footer, 'active', 400, 0)
}



/* Smooth scroll */
navBar.forEach(item => item.addEventListener('click', function (e) {
  e.preventDefault()
  removeActiveClass()
  currentMenu = item
  let block = document.querySelector(item.dataset.scroll)

  block.scrollIntoView({
    behavior: 'smooth'
  });

}))

function removeActiveClass() {
  navBar.forEach(item => item.classList.remove('active'))
}

/* Collapse */

; (() => {
  let accordion = document.querySelector('.accordion').children;

  [...accordion].forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        [...accordion].forEach(i=>i.classList.remove('active'))
        item.classList.add('active');
      }
    })
  })
})()


/* Slider */
$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

/* Toggle burger menu */
navToggle.addEventListener('click', ()=>{
  document.getElementById("nav").classList.toggle("active");
  navToggle.classList.toggle("active");
})

